import { useRef } from 'react';
import './NewTaskHandler.css';

// 設 key 用
let taskId = 0;

// 處理新增 task 的相關內容
function NewTaskHandler({ tasks, setTasks }) {
  const inputRef = useRef(null);  // 透過 ref 建立參考 input element 的途徑

  // 新增鍵，依照輸入的內容建立新的 task
  function onNewTaskBtnClicked() {
    const content = inputRef.current.value;
    if (!content) {
      alert('Please write a title for the new task :3');
      return;
    }
    inputRef.current.value = '';
    const taskElem = {
      id: taskId,
      content,
      checked: false,
    }
    setTasks([...tasks, taskElem]);
    taskId++;
  }

  return (
    <div className="new-task-handler">
      <span className="new-task-icon">✏️</span>
      <input
        className="new-task-input common-concave"
        type="text"
        ref={inputRef}
        placeholder="Write a title for the new task"
      />
      <button className="new-task-btn common-btn" onClick={onNewTaskBtnClicked} >📄</button>
    </div>
  );
}

export default NewTaskHandler;
