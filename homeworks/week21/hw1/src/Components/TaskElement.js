import { useState, useRef } from 'react';
import './TaskElement.css';

function TaskElement({ task, tasks, setTasks }) {
  const taskRef = useRef(null);
  const contentRef = useRef(null);
  const editContentRef = useRef(null);
  const editRootRef = useRef(null);

  const [isChecked, setIsChecked] = useState(task.checked);
  const [isEditing, setIsEditing] = useState(false);

  function onCheckBtnClicked() {
    contentRef.current.classList.toggle('checked-text');
    task.checked = !task.checked;
    setIsChecked(!isChecked);
    setTasks([...tasks]);
  }

  function onDelBtnClicked() {
    setTasks(tasks.filter(elem => elem.id !== task.id));
  }

  function onEditStart() {
    if (isEditing) return;
    switchEditMode();
    editContentRef.current.value = task.content;
    editContentRef.current.focus();
    setIsEditing(true);
  }

  function onEditFinish() {
    if (!isEditing) return;
    switchEditMode();
    task.content = editContentRef.current.value;
    contentRef.current.innerText = task.content;
    setIsEditing(false);
  }

  function switchEditMode() {
    contentRef.current.classList.toggle('hidden');
    editRootRef.current.classList.toggle('hidden');
  }

  return (
    <div className="task-element" ref={taskRef}>
      <div className="common-concave"></div>
      <div className="task-content">
        <div className="task-sign">{task.checked ? '🏁' : '🚩'}</div>
        <div 
          className={task.checked ? "task-text checked-text" : "task-text"}
          ref={contentRef} 
          onClick={onEditStart}
        >{task.content}</div>
        <div className="edit-root hidden" ref={editRootRef}>
          <input className="edit-text common-concave" type="text" ref={editContentRef} />
          <div className="edit-blocker" onClick={onEditFinish}></div>
        </div>
        <button className="task-btn common-btn" onClick={onCheckBtnClicked}>{task.checked ? '↩️' : '✔️'}</button>
        <button className="task-btn common-btn" onClick={onDelBtnClicked}>❌</button>
      </div>
    </div>
  );
}

export default TaskElement;
