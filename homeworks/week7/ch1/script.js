/* eslint-disable */
const pages = [];
for (page of document.body.getElementsByClassName('page-elem')) pages.push(page);
const pagesGroup = document.querySelector('.pages');
const root = document.querySelector('.carousel-root');
root.appendChild(pages[0]);
let blockClick = false;
let currentIndex = 0;
let nextIndex = 0;

console.log(pages);

function sortPages(n) {
  root.appendChild(pages[nextIndex]);
  if (n > currentIndex) root.appendChild(pages[currentIndex]);
}

function onAnimStart(n) {
  blockClick = true;
  nextIndex = n < 0 ? 3 : n % 4;
  sortPages(n);
  root.left = n > currentIndex ? '0vw' : '-100vw';
  root.style.transitionDuration = '0.5s';
  root.left = n > currentIndex ? '100vw' : '0vw';
  setTimeout(() => {
    onAnimEnd();
  }, 600);
}

function onAnimEnd() {
  console.log(pages);
  console.log(pages[currentIndex]);
  pagesGroup.appendChild(pages[currentIndex]);
  currentIndex = nextIndex;
  root.style.transitionDuration = '0s';
  root.left = '0vw';
  blockClick = false;
}

function bottomBtn(element) {
  console.log(element);
}

function leftBtn() {
  onAnimStart(currentIndex - 1);
}

function rightBtn() {
  onAnimStart(currentIndex + 1);
}

document.querySelector('.btn-group').addEventListener('click', (e) => {
  if (!e.target.value || blockClick) return;
  const fn = window[e.target.value.split('-')[0]];
  if (typeof fn === 'function') fn(e.target);
});