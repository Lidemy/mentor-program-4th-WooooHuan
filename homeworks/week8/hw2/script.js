/* eslint-disable */
const tabBtnsRoot = document.querySelector('.tabs-bar');
const tabBtns = document.body.getElementsByClassName('tab-btn'); //可省
let lastPatchNode = getElement(tabBtns[0], 'tab-patch');
const apiUrl = 'https://api.twitch.tv/kraken';
const errMsg = '系統不穩定，請再試一次';

function getElement(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
}

function inRange(x, min, max) {
  return ((x - min) * (x - max) <= 0);
}

function showError() {
  alert(errMsg);
}

function showStreams(data) {
  console.log(data);
}

function getStreams(name) {
  var req = new XMLHttpRequest();
  req.open('GET', url + '/streams?game=' + encodeURIComponent(name), true);
  req.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  req.setRequestHeader('Client-ID', 'jl04gehwmgpr795vsgeajymfb4bk95');
  req.send();
  req.onload = () => {
    if (inRange(req.status, 200, 399)) {
      let data;
      try {
        data = JSON.parse(req.response);
      } catch (err) {
        showError();
        return;
      } showStreams(data);
    } else {
      showError();
    }
  };
}

/*function setNewTask() {
  const clone = taskTemplate.cloneNode(true);
  clone.classList.remove('task-template');
  getElement(clone, 'task-text').innerText = getNewTaskTitle();
  listMainNode.appendChild(clone);
}*/

function tabBtn(element, n) {
  const patchNode = getElement(element, 'tab-patch');
  patchNode.classList.toggle('hidden');
  lastPatchNode.classList.toggle('hidden');
  lastPatchNode = patchNode;
}

tabBtnsRoot.addEventListener('click', (e) => {
  console.log(e.target);
  if (!e.target.value) return;
  const targetInfo = e.target.value.split('-');
  const fn = window[targetInfo[0]];
  if (typeof fn === 'function') fn(e.target, targetInfo[1]);
});
