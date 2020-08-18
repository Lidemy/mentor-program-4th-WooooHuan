/* eslint-disable */
const contentNode = document.querySelector('.content-sec');
const listNode = document.querySelector('.list-content');
const prizeNode = document.querySelector('.prize-content');
const prizeText = document.querySelector('.prize-text');
const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errMsg = '系統不穩定，請再試一次';
let blockClick = false;

function inRange(x, min, max) {
  return ((x - min) * (x - max) <= 0);
}

function showError() {
  alert(errMsg);
  blockClick = false;
}

function showAwards(prize) {
  switch (prize) {
    case 'FIRST': prizeText.innerText = '頭獎！日本東京來回雙人遊！'; break;
    case 'SECOND': prizeText.innerText = '貳獎！ 90 吋電視一台！'; break;
    case 'THIRD': prizeText.innerText = '參獎！知名 YouTuber 簽名握手會入場券一張！'; break;
    case 'NONE': prizeText.innerText = '沒中ㄛ，ㄏㄏ'; break;
    default: showError(); return;
  }
  listNode.classList.toggle('hidden');
  prizeNode.classList.toggle('hidden');
  contentNode.classList.add(`${prize.toLowerCase()}-bg`);
}

function initRequest() {
  const req = new XMLHttpRequest();
  req.open('GET', apiUrl, true);
  req.send();
  req.onload = () => {
    if (inRange(req.status, 200, 399)) {
      let data;
      try {
        data = JSON.parse(req.response);
      } catch (err) {
        showError();
        return;
      }
      if (!data.prize) {
        showError();
        return;
      }
      showAwards(data.prize);
    } else {
      showError();
    }
  };
  req.onerror = () => {
    showError();
  };
}

document.querySelector('.lottery-btn').addEventListener('click', () => {
  if (blockClick) return;
  blockClick = true;
  initRequest();
});

document.querySelector('.retry-btn').addEventListener('click', () => {
  window.location.reload();
});
