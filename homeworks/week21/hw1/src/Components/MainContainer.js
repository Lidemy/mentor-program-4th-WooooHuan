import { useState, useRef } from 'react';
import './MainContainer.css';
import ToolBar from './ToolBar';
import NewTaskHandler from './NewTaskHandler';
import CategoryRadio from './CategoryRadio';
import TaskElement from './TaskElement';

function MainContainer() {
  const [category, setCategory] = useState('all');
  const [tasks, setTasks] = useState([]);

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

  return (
    <div className="list-container">
      <div className="list-window common-convex">
        <div className="window-title">📝Todo List</div>
        <ToolBar tasks={tasks} setTasks={setTasks} />
        <NewTaskHandler tasks={tasks} setTasks={setTasks} />
        <CategoryRadio category={category} setCategory={setCategory} />
        <div className="tasks-container">{
          getVisibleTasks().map(task =>
            <TaskElement
              key={task.id}
              {...{task}}
              {...{tasks}}
              {...{setTasks}}
            />
          )
        }</div>
      </div>
    </div>
  );
}

export default MainContainer;
