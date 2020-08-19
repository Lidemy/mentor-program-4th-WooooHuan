/* eslint-disable */
const tabsRoot = document.querySelector('.tabs-bar');
const tabTemplate = document.querySelector('.tab-template');
const streamTamplate = document.querySelector('.stream-template');
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
/*
function initTabs(data) {

}*/

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

function initTabs(data) {
  for (let i = 0; i < 5; i++) {
    const name = data.top[i].game.name;
    const clone = tabTemplate.cloneNode(true);
    clone.value = name;
    clone.classList.remove('tab-template');
    getElement(clone, 'tab-title').innerText = name;
    tabsRoot.appendChild(clone);
    if (i > 0) getElement(clone, 'tab-patch').classList.add('hidden'); // 處理 tab 相關
  } 
}

function getGamesInfo() {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/games/top?limit=10`;
  sendRequest(req, reqUrl, initTabs);
}

getGamesInfo();
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

tabsRoot.addEventListener('click', (e) => {
  if (!e.target.value) return;
  const targetInfo = e.target.value.split('-');
  const fn = window[targetInfo[0]];
  if (typeof fn === 'function') fn(e.target, targetInfo[1]);
});

///////////

document.querySelector('.games').addEventListener('click', (e) => {
  getGamesInfo();
});

document.querySelector('.streams').addEventListener('click', (e) => {
  getStreams('Just Chatting');
});