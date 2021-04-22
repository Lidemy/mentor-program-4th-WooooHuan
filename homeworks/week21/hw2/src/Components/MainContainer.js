import { useState, useRef } from 'react';
import './MainContainer.css';
import Wireframe from './Wireframe';
import GoBoard from './GoBoard';
import GameOverPanel from './GameOverPanel';

function MainContainer() {
  const boardContainerRef = useRef(null);     // 透過 ref 建立參考 board container 的途徑
  const [winner, setWinner] = useState('');   // 作為是否有陣營勝出的依據

  // 當遊戲結束時所呼叫的函式，設定勝利陣營
  function onGameOver(winner) {
    setWinner(winner);
  }

  // 透過 class 的置換與 setTimeout 實現落子時的震動效果
  function shakeEffect() {
    boardContainerRef.current.classList.remove('shake-anim');
    setTimeout(() => {
      boardContainerRef.current.classList.add('shake-anim');
    }, 0);
  }

  // GameOverPanel - 其中一方勝出時的結算畫面，當 winner 不為空值時呈現
  // Wireframe - 純粹負責畫棋盤
  // GoBoard - 棋盤，負責管理棋盤上出現的各種元件
  return (
    <div className="main-container">
      <div className="board-container" ref={boardContainerRef}>
        {winner ? <GameOverPanel faction={winner} /> : ''}
        <Wireframe />
        <GoBoard {...{onGameOver}} {...{shakeEffect}} />
      </div>
    </div>
  );
}

export default MainContainer;
