/* eslint-disable */
const tabsRoot = document.querySelector('.tabs-bar');
const tabTemplate = document.querySelector('#tab-template');
const strmRoot = document.querySelector('.tab-content');
const strmTamplate = document.querySelector('#stream-template');
const apiUrl = 'https://api.twitch.tv/kraken';
const errMsg = '系統不穩定，請再試一次';
let curGame = '';
let tabList = [];
let strmList = [];
let dataList = [];
let lastPatchNode;
let reqCount = 20;

function showError() {
  alert(errMsg);
}

function resetStrmData() {
  dataList = [];
  reqCount = 20;
  for (strm of strmList) {
    strm.remove();
  } strmList = [];
}

function getElem(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
}

function initStrms(data) {
  dataList = dataList.concat(data.streams);
  if (dataList.length < reqCount) {
    getStrms(curGame);
    return;
  }   
  const lastListLength = strmList.length;
  cloneTemplate(strmTamplate, reqCount - lastListLength, strmRoot, strmList);
  for (let i = lastListLength; i < reqCount; i++) {
    getElem(strmList[i], 'img-preview').src = dataList[i].preview.large;
    getElem(strmList[i], 'img-avatar').src = dataList[i].channel.logo;
    getElem(strmList[i], 'stream-title').innerText = dataList[i].channel.status;
    getElem(strmList[i], 'stream-channel').innerText = `id : ${dataList[i].channel.name}
      viewers : ${dataList[i].viewers}`;
  }
}

function initTabs(data) {
  cloneTemplate(tabTemplate, 5, tabsRoot, tabList);
  for (let i = 0; i < tabList.length; i++) {
    const name =  data.top[i].game.name;
    getElem(tabList[i], 'tab-title').innerText = name;
    if (i === 0) {
      lastPatchNode = getElem(tabList[i], 'tab-patch');
      lastPatchNode.classList.remove('hidden');
      curGame = name;
      getStrms(name);
    }
  } 
}

function cloneTemplate(target, count, root, list) {
  for (let i = 0; i < count; i++) {
    const clone = target.cloneNode(true);
    clone.classList.remove('hidden');
    clone.removeAttribute('id');
    root.appendChild(clone);
    list.push(clone);
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

function getStrms(name) {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/streams?game=${encodeURIComponent(name)}&limit=100&offset=${dataList.length}`;
  sendRequest(req, reqUrl, initStrms);
}

function updatePatch(newTabElem) {
  const newPatchNode = getElem(newTabElem, 'tab-patch');
  lastPatchNode.classList.toggle('hidden');
  newPatchNode.classList.toggle('hidden');
  lastPatchNode = newPatchNode;
}

function tabBtn(element) {
  const name = getElem(element, 'tab-title').innerText;
  if (name === curGame) return;
  updatePatch(element);
  resetStrmData();
  curGame = name;
  getStrms(curGame);
}

function moreBtn() {
  reqCount += 20;
  getStrms(curGame);
}

document.body.addEventListener('click', (e) => {
  if (!e.target.value) return;
  const fn = window[e.target.value];
  if (typeof fn === 'function') fn(e.target);
});

window.onload = () => {
  const req = new XMLHttpRequest();
  const reqUrl = `${apiUrl}/games/top`;
  sendRequest(req, reqUrl, initTabs);
}
