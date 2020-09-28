const tabsRoot = document.querySelector('.tabs-bar');
const tabTemplate = document.querySelector('#tab-template');
const strmRoot = document.querySelector('.tab-content');
const strmTamplate = document.querySelector('#stream-template');
const apiUrl = 'https://api.twitch.tv/kraken';
const tabList = [];
const limit = 10;
let curGame = null;
let strmList = [];
let dataList = [];
let reqCount = 20;
let limitCount = 0;
let lastPatchNode;

function getElem(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
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

function sendRequest(reqUrl, cb) {
  const options = {
    method: 'GET',
    headers: new Headers({
      'Client-ID': 'jl04gehwmgpr795vsgeajymfb4bk95',
      'Accept': 'application/vnd.twitchtv.v5+json',
    }),
  }

  fetch(reqUrl, options)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      cb(data);
    })
    .catch(err => {
      console.log(err)
    });
}

function resetStrmData() {
  dataList = [];
  reqCount = 20;
  for (const strm of strmList) {
    strm.remove();
  }
  strmList = [];
}

function initStrms(data) {
  dataList = dataList.concat(data.streams);
  if (dataList.length < reqCount && limitCount < limit) {
    getStrms(curGame);
    limitCount++;
    return;
  }
  limitCount = 0;
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

function getStrms(name) {
  const gameProp = `game=${encodeURIComponent(name)}`;
  const reqProps = `&limit=100&offset=${dataList.length}`;
  const reqUrl = `${apiUrl}/streams?${gameProp}${reqProps}`;
  sendRequest(reqUrl, initStrms);
}

function initTabs(data) {
  cloneTemplate(tabTemplate, 5, tabsRoot, tabList);
  for (let i = 0; i < tabList.length; i++) {
    const name = data.top[i].game.name;
    getElem(tabList[i], 'tab-title').innerText = name;
    if (!curGame) {
      lastPatchNode = getElem(tabList[i], 'tab-patch');
      lastPatchNode.classList.remove('hidden');
      curGame = name;
      getStrms(name);
    }
  }
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
  const reqUrl = `${apiUrl}/games/top`;
  sendRequest(reqUrl, initTabs);
};
