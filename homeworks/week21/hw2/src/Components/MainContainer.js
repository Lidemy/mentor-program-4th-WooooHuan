import { useState, useRef } from 'react';
import './MainContainer.css';
import Wireframe from './Wireframe';
import GoBoard from './GoBoard';
import GameOverPanel from './GameOverPanel';

function MainContainer() {
  const boardContainerRef = useRef(null);
  const [winner, setWinner] = useState('');

  function onGameOver(winner) {
    setWinner(winner);
  }

  function shakeEffect() {
    boardContainerRef.current.classList.remove('shake-anim');
    setTimeout(() => {
      boardContainerRef.current.classList.add('shake-anim');
    }, 0);
  }

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
