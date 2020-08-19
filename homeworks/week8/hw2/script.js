/* eslint-disable */
const tabsRoot = document.querySelector('.tabs-bar');
const tabTemplate = document.querySelector('.tab-template');
const streamRoot = document.querySelector('.tab-content');
const streamTamplate = document.querySelector('.stream-template');
const apiUrl = 'https://api.twitch.tv/kraken';
const errMsg = '系統不穩定，請再試一次';
let streamList;
let lastPatchNode;

function getElement(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
}

function showError() {
  alert(errMsg);
}

function updateStreams(data) {

}

function initStreams(data) {
  for (let i = 0; i < 20; i++) {
    const clone = tabTemplate.cloneNode(true);
    clone.classList.remove('tab-template');
    tabsRoot.appendChild(clone);
    if (i === 0) {
      lastPatchNode = getElement(clone, 'tab-patch');
      lastPatchNode.classList.remove('hidden');
    }
  }
}

function initTabs(data) {
  for (let i = 0; i < 5; i++) {
    const name = data.top[i].game.name;
    const clone = tabTemplate.cloneNode(true);
    clone.classList.remove('tab-template');
    getElement(clone, 'tab-title').innerText = name;
    tabsRoot.appendChild(clone);
    if (i === 0) {
      lastPatchNode = getElement(clone, 'tab-patch');
      lastPatchNode.classList.remove('hidden');
    }
  }
}

function sendRequest(req, reqUrl, cb) {
  req.open('GET', reqUrl, true);
  req.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json');
  req.setRequestHeader('Client-ID', 'jl04gehwmgpr795vsgeajymfb4bk95');
  req.send();
  req.onload = () => {
    if ((req.status - 200) * (req.status - 399) <= 0) {
      let data;
      try { data = JSON.parse(req.response); }
      catch (err) { showError(); return; } 
      cb(data);
    } else {
      showError();
    }
  };
}

function getStreams(name) {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/streams?game=${encodeURIComponent(name)}`;
  sendRequest(req, reqUrl, initStreams);
}

function updateTab(newTabElem) {
  const newPatchNode = getElement(newTabElem, 'tab-patch');
  lastPatchNode.classList.toggle('hidden');
  newPatchNode.classList.toggle('hidden');
  lastPatchNode = newPatchNode;
}

function tabBtn(element) {
  updateTab(element);
  getStreams(getElement(element, 'tab-title').innerText);
}

document.body.addEventListener('click', (e) => {
  console.log(e.target);
  if (!e.target.value) return;
  const fn = window[e.target.value];
  if (typeof fn === 'function') fn(e.target);
});

window.onload = () => {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/games/top`;
  sendRequest(req, reqUrl, initTabs);
}

///////////////////

/*function setNewTask() {
  const clone = taskTemplate.cloneNode(true);
  clone.classList.remove('task-template');
  getElement(clone, 'task-text').innerText = getNewTaskTitle();
  listMainNode.appendChild(clone);
}*/