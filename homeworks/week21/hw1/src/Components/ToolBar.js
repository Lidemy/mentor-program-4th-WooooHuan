import { useRef } from 'react';
import './ToolBar.css';

// 工具列， 掌管使用者名稱、list 的存取、清空已完成 tasks
function ToolBar({ tasks, setTasks }) {
  const inputRef = useRef(null);  // 透過 ref 建立參考 input element 的途徑

  // 清空鍵，清空已完成的 task
  function onClearBtnClicked() {
    setTasks(tasks.filter(task => !task.checked));
  }

  // 儲存鍵，依據使用者名稱將當前的 tasks 進行 localStorage
  function onSaveBtnClicked() {
    const userId = getUserId();
    if (!userId) return;
    localStorage.setItem(userId, JSON.stringify(tasks));
  }

  // 讀取鍵，依據使用者名稱讀取之前儲存的 tasks
  function onLoadBtnClicked() {
    const userId = getUserId();
    if (!userId) return;
    const userTasks = JSON.parse(localStorage.getItem(userId));
    if (!userTasks) {
      alert('User tasks not found :3');
      return;
    }
    setTasks(userTasks);
  }

  // 透過 ref 途徑獲取 input value
  function getUserId() {
    const userId = inputRef.current.value;
    if (!userId) {
      alert('Please input your user ID :3');
      return '';
    }
    return userId;
  }

  return (
    <div className="tool-bar">
      <span className="tool-id-icon">🗿</span>
      <input className="tool-id common-concave" type="text" placeholder="User ID" ref={inputRef}></input>
      <button className="tool-btn common-btn" onClick={onSaveBtnClicked}>Save 💾</button>
      <button className="tool-btn common-btn" onClick={onLoadBtnClicked}>Load 📂</button>
      <button className="tool-btn common-btn" onClick={onClearBtnClicked}>Clear Done 🗑️</button>
    </div>
  );
}

export default ToolBar;
