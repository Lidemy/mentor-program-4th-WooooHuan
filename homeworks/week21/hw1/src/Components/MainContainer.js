import { useState } from 'react';
import './MainContainer.css';
import ToolBar from './ToolBar';
import NewTaskHandler from './NewTaskHandler';
import CategoryRadio from './CategoryRadio';
import TaskElement from './TaskElement';

// todolist 本體，子元件依照功能拆成四個部分
function MainContainer() {
  const [category, setCategory] = useState('all');  // radio 狀態
  const [tasks, setTasks] = useState([]);           // tasks 狀態

  // 依條件回傳需要被顯示的 tasks (條件由 radio input 決定)
  function getVisibleTasks() {
    switch (category) {
      case 'todo':
        return tasks.filter(task => !task.checked);
      case 'done':
        return tasks.filter(task => task.checked);
      default:
        return tasks;
    }
  }

  // ToolBar - 掌管使用者名稱、list 的存取、清空已完成 tasks
  // NewTaskHandler - 處理新增 task 的相關內容
  // CategoryRadio - 管理並回傳 radio 狀態
  // TaskElement - task 的相關內容都在此元件中
  return (
    <div className="list-container">
      <div className="list-window common-convex">
        <div className="window-title">📝Todo List</div>
        <ToolBar {...{ tasks }} {...{ setTasks }} />
        <NewTaskHandler {...{ tasks }} {...{ setTasks }} />
        <CategoryRadio {...{ category }} {...{ setCategory }} />
        <div className="tasks-container">{
          // 透過 getVisibleTasks 從 tasks 過濾出需要被顯示的 task
          getVisibleTasks().map(task =>
            <TaskElement
              key={task.id}
              {...{ task }}
              {...{ tasks }}
              {...{ setTasks }}
            />
          )
        }</div>
      </div>
    </div>
  );
}

export default MainContainer;
