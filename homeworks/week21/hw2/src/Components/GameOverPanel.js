import { useState, useEffect } from 'react';
import './GameOverPanel.css';

function GameOverPanel({ faction }) {
  const [showMembers, setShowMembers] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMembers(true);
    }, 500);
  }, []);

  const members =
    <div className="members-root">
      <div className="title-text">
        {
          faction === 'black' ?
            '⚫ WINS' :
            '⚪ WINS'
        }
      </div>
      <div
        className="try-again-btn"
        onClick={() => window.location.reload()}
      >
        Try again
      </div>
    </div>;

  return (
    <div className="panel-container">
      {showMembers ? members : ''}
    </div>
  );
}

export default GameOverPanel;
