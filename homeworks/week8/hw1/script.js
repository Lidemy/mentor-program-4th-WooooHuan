/* eslint-disable */
const apiUrl = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errorMessage = '系統不穩定，請再試一次';

function getElement(parentNode, className) {
  return parentNode.getElementsByClassName(className)[0];
}

document.querySelector('.lottery-btn').addEventListener('click', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', apiUrl, true);
  console.log('hello');
  xhr.send();
  xhr.onload = function() {
    //((x-min)*(x-max) <= 0);
    if (xhr.status >= 200 && xhr.status < 400) {
      let data;
      try {
        data = JSON.parse(xhr.response);
      } catch(err) {
        cb(errorMessage);
        return;
      }

      console.log(data);

      if (!data.prize) {
        cb(errorMessage);
        return;
      }

      //cb(null, data);
    } else {
      //cb(errorMessage);
 
    }
  }
  xhr.onerror = function() {
    cb(errorMessage);
  }
  console.log('world');

  console.log('!!');
});

