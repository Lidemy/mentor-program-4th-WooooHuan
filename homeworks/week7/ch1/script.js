/* eslint-disable */
let currentIndex = 0;
let nextIndex = 0;
let blockClick = false;
const root = document.querySelector('.carousel-mask');
const pages = document.body.getElementsByClassName('carousel-elem');
pages[0].style.display = 'flex';

function currentPage() {
  return pages[currentIndex];
}

function nextPage() {
  return pages[nextIndex];
}

function trimNextIndex(index) {
  return index < 0 ? 3 : index % 4;
}

function setPagesTransition(isPlaying) {
  for (page of pages) page.style.transitionDuration = isPlaying ? '0.5s' : '0s';
}

function sortPages() {
  if (n > currentIndex) {
    root.appendChild.nextPage();
  } else {

  }
}

function onAnimStart(n) {
  blockClick = true;
  nextIndex = trimNextIndex(n);
  sortPages(n);
  //root.appendChild(n > currentIndex ? nextPage());



  nextPage().style.left = n > currentIndex ? '100vw' : '-100vw';
  nextPage().style.display = 'flex';
  setPagesTransition(true);
  //currentPage().style.left = n > currentIndex ? '-100vw' : '100vw';
  nextPage().style.left = '0vw';
  /*setTimeout(() => {
    onAnimEnd();
  }, 600);*/
}

function onAnimEnd() {
  currentPage().style.display = 'none';
  currentIndex = nextIndex;
  setPagesTransition(false);
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