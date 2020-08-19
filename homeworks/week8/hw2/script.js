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

function sendRequest(req, reqUrl, cb) {
  req.open('GET', reqUrl, true);
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
      } cb(data);
    } else {
      showError();
    }
  };
}

function getStreams(name) {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/streams?game=${encodeURIComponent(name)}&limit=20`;
  sendRequest(req, reqUrl, showStreams);
}

function getGames() {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/games/top?limit=5`;
  sendRequest(req, reqUrl, showStreams);
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

///////////

document.querySelector('.games').addEventListener('click', (e) => {
  getGames();
});

document.querySelector('.streams').addEventListener('click', (e) => {
  getStreams('Just Chatting');
});