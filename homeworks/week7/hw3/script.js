/* eslint-disable */ 
const listMainNode = document.querySelector('.list-main');
const newTaskTitle =  document.querySelector('.new-task-input');
const taskTemplate = document.querySelector('.task-template');

function getNewTaskTitle() {
  const taskTitle = newTaskTitle.value;
  newTaskTitle.value = '';
  return taskTitle;
}

function setTaskTitle(parentNode, content) {
  parentNode.getElementsByClassName('task-text')[0].innerText = content;
}

function setNewTask() {
  const clone = taskTemplate.cloneNode(true);
  clone.classList.remove('task-template');
  setTaskTitle(clone, getNewTaskTitle());
  listMainNode.appendChild(clone);
}

function newBtn(element) {
  if (newTaskTitle.value.length < 1) { 
    alert('The task title is empty!'); 
    return;
  } setNewTask();
}

function checkBtn(element) {
  element.classList.toggle("checked-btn");
  element.parentNode.getElementsByClassName('task-text')[0]
}

function delBtn(element) {
  element.parentNode.parentNode.remove();
}

listMainNode.addEventListener('click', (e) => {
  const fn = window[e.target.value];
  if (typeof fn === 'function') fn(e.target);
});
