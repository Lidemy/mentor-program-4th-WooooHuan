/* eslint-disable */
const pages = [];
for (const page of document.body.getElementsByClassName('page-elem')) pages.push(page);
const pagesGroup = document.querySelector('.pages');
const boxBtn = document.body.getElementsByClassName('box-btn');
const root = document.querySelector('.carousel-root');
root.appendChild(pages[0]);
const dummyPage = pages[4];
let blockClick = false;
let currentIndex = 0;
let nextIndex = 0;

function sortPages(n) {
  root.appendChild(n < currentIndex ? pages[nextIndex] : dummyPage);
  root.appendChild(pages[currentIndex]);
  root.appendChild(n < currentIndex ? dummyPage : pages[nextIndex]);
}

function onAnimStart(n) {
  blockClick = true;
  nextIndex = n < 0 ? 3 : n % 4;
  sortPages(n);
  root.classList.remove('no-transition');
  root.style.left = n < currentIndex ? '100vw' : '-100vw';
  boxBtn[nextIndex].classList.add('target-btn');
  boxBtn[currentIndex].classList.remove('target-btn');
  setTimeout(onAnimEnd, 500);
}

function onAnimEnd() {
  blockClick = false;
  pagesGroup.appendChild(pages[currentIndex]);
  pagesGroup.appendChild(dummyPage);
  currentIndex = nextIndex;
  root.classList.add('no-transition');
  root.style.left = '0vw';
}

function bottomBtn(element) {
  const btnIndex = Number(element.value.split('-')[1]);
  if (currentIndex === btnIndex) return;
  onAnimStart(btnIndex);
}

function leftBtn() {
  onAnimStart(currentIndex - 1);
}

function rightBtn() {
  onAnimStart(currentIndex + 1);
}

setInterval(() => {
  if (!blockClick) rightBtn();
}, 5000);

document.querySelector('.btn-group').addEventListener('click', (e) => {
  if (blockClick || !e.target.value) return;
  const fn = window[e.target.value.split('-')[0]];
  if (typeof fn === 'function') fn(e.target);
});
