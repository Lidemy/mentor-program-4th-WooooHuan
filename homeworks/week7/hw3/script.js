/* eslint-disable */
const listMainNode = document.querySelector('.list-main');
const newTaskTitle = document.querySelector('.new-task-input');
const taskTemplate = document.querySelector('.task-template');

function getNewTaskTitle() {
  const taskTitle = newTaskTitle.value;
  newTaskTitle.value = '';
  return taskTitle;
}

function getElement(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
}

function setNewTask() {
  const clone = taskTemplate.cloneNode(true);
  clone.classList.remove('task-template');
  getElement(clone, 'task-text').innerText = getNewTaskTitle();
  listMainNode.appendChild(clone);
}

function switchSign(element, signA, signB) {
  element.classList.toggle('checked');
  element.innerText = element.classList.contains('checked') ? signA : signB;
}

function newBtn() {
  if (newTaskTitle.value.length < 1) {
    alert('Task title is empty!');
    return;
  } setNewTask();
}

function checkBtn(element) {
  const signElem = getElement(element.parentNode, 'task-sign');
  const textElem = getElement(element.parentNode, 'task-text');
  signElem.classList.toggle('checked-sign');
  textElem.classList.toggle('checked-text');
  switchSign(signElem, '🏁', '🚩');
  switchSign(element, '↩️', '✔️');
}

function delBtn(element) {
  element.parentNode.parentNode.remove();
}

listMainNode.addEventListener('click', (e) => {
  const fn = window[e.target.value];
  if (typeof fn === 'function') fn(e.target);
});

listMainNode.addEventListener('keyup', (e) => {
  const keyUp = e.key === 'Enter' || e.keyCode === 13;
  if (keyUp && newTaskTitle.value.length > 1) newBtn();
});
