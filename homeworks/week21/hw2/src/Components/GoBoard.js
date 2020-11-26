import { useState } from 'react';
import { Game, Board } from '../Utils/gomoku';
import './GoBoard.css';

import GoButton from './GoButton';
import GoItem from './GoItem';

function GoBoard({ onGameOver, shakeEffect }) {
  const [game, setGame] = useState(
    new Game(onGameOver)
  );
  const [board, setBoard] = useState(
    new Board(
      19,
      <GoButton
        {...{game}}
        {...{setGame}}
        {...{shakeEffect}}
      />,
      <GoItem faction={"black"} />,
      <GoItem faction={"white"} />
    )
  );

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
