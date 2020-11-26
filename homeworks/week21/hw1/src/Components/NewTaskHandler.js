import { useRef } from 'react';
import './NewTaskHandler.css';

let taskId = 0;

function NewTaskHandler({ tasks, setTasks }) {
  const inputRef = useRef(null);

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
