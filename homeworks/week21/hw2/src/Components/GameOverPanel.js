import { useState, useEffect } from 'react';
import './GameOverPanel.css';

// 其中一方勝出時的結算畫面，當 winner 不為空值時呈現
function GameOverPanel({ faction }) {
  const [showMembers, setShowMembers] = useState(false);  // 是否顯示相關內容，與 setTimeout 配合，實現文案延遲出現的效果

  // 延遲 0.5 秒再改變 state
  useEffect(() => {
    setTimeout(() => {
      setShowMembers(true);
    }, 500);
  }, []);

  // 延遲呈現的相關內容
  const members =
    <div className="members-root">
      <div className="title-text">
        {
          faction === 'black' ? // 顯示勝利陣營
            '⚫ WINS' :
            '⚪ WINS'
        }
      </div>
      <div
        className="try-again-btn"
        onClick={() => window.location.reload()}  // Try again 被點擊時，直接刷新頁面
      >
        Try again
      </div>
    </div>;

  // 讀秒後才會顯示內容
  return (
    <div className="panel-container">
      {showMembers ? members : ''}
    </div>
  );
}

export default GameOverPanel;
