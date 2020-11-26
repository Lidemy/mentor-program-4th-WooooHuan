import { useRef } from 'react';
import './ToolBar.css';

function ToolBar({ tasks, setTasks }) {
  const inputRef = useRef(null);

  function onClearBtnClicked() {
    setTasks(tasks.filter(task => !task.checked));
  }

  function onSaveBtnClicked() {
    const userId = getUserId();
    if (!userId) return;
    localStorage.setItem(userId, JSON.stringify(tasks));
  }

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
