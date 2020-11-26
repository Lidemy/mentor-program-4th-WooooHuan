import { useState, useRef } from 'react';
import './TaskElement.css';

function TaskElement({ task, tasks, setTasks }) {
  const contentRef = useRef(null);      // 透過 ref 建立參考 task content 的途徑
  const editContentRef = useRef(null);  // 透過 ref 建立參考 edit content 的途徑
  const editRootRef = useRef(null);     // 透過 ref 建立參考 edit 介面 root 的途徑

  const [isChecked, setIsChecked] = useState(task.checked); // 該 task 是否已完成 
  const [isEditing, setIsEditing] = useState(false);        // 該 task 是否正在編輯

  // 完成、復原鍵，將 task 的狀態在完成與未完成之間切換 (toggle)
  function onCheckBtnClicked() {
    contentRef.current.classList.toggle('checked-text');
    task.checked = !task.checked;
    setIsChecked(!isChecked);
    setTasks([...tasks]);
  }

  // 刪除鍵，將 task 從 tasks 中刪除
  function onDelBtnClicked() {
    setTasks(tasks.filter(elem => elem.id !== task.id));
  }

  // 啟用編輯，將 task 切換到編輯狀態
  function onEditStart() {
    if (isEditing) return;
    switchEditMode();                             // 將顯示狀態切換到編輯模式
    editContentRef.current.value = task.content;  // 將 task.content 注入到 input 欄位的 value 中
    editContentRef.current.focus();               // 將游標 focus 在 input 欄位
    setIsEditing(true);
  }

  // 結束編輯，將 task 切換回一般狀態
  function onEditFinish() {
    if (!isEditing) return;
    switchEditMode();                              // 將顯示狀態切回到一般模式
    task.content = editContentRef.current.value;   // 將 input 欄位的 value 傳回到 task.content 中
    contentRef.current.innerText = task.content;   // 將 task.content 與 innerText 同步
    setIsEditing(false);
  }

  // 切換編輯狀態，透過 class name 切換顯示內容 (非主流 react 作法，當時還在適應中，待改善)
  function switchEditMode() {
    contentRef.current.classList.toggle('hidden');
    editRootRef.current.classList.toggle('hidden');
  }

  // 透過判斷 task.checked 決定大部分的顯示樣貌
  return (
    <div className="task-element">
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
