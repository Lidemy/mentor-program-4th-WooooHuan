import { useState } from 'react';
import { Game, Board } from '../Utils/gomoku';
import './GoBoard.css';

import GoButton from './GoButton';
import GoItem from './GoItem';

// 棋盤，負責管理棋盤上出現的各種元件
function GoBoard({ onGameOver, shakeEffect }) {
  
  // 建立 game state
  // 在初始值欄位創建一個 Game 物件
  // 依建構式填入 onGameOver 函式
  const [game, setGame] = useState(
    new Game(onGameOver)
  );

  // 建立 board state
  // 在初始值欄位創建一個 Board 物件
  const [board, setBoard] = useState(
    new Board(
      19,                     // 尺寸
      <GoButton               // 落子按鈕元件
        {...{game}}           // game state 相關
        {...{setGame}}        // game state 相關
        {...{shakeEffect}}    // 落子時所需的震動效果
      />,
      <GoItem faction={"black"} />, // 黑子元件
      <GoItem faction={"white"} />  // 白子元件
    )
  );

  // 從 board 物件的 getVisibleComponents 方法，取出「呈現用」的相關元件，詳見 board 物件
  return (
    <div className="input-transformer">
      <div className="input-background">
        <div className="input-container">
          {board.getVisibleComponents()}
        </div>
      </div>
    </div>
  );
}

export default GoBoard;
