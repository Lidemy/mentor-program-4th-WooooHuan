/* eslint-disable */
const pages = document.body.getElementsByClassName('carousel-elem');

function bottomBtn(element) {
  console.log(element);
}

function prevBtn(element) {
  
  console.log(element);
}

function nextBtn(element) {
    
  console.log(element);
}

document.querySelector('.btn-group').addEventListener('click', (e) => {
  if(!e.target.value) return;
  const fn = window[e.target.value.split('-')[0]];
  if (typeof fn === 'function') fn(e.target);
});