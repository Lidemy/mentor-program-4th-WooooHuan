const url = new URL(document.location);

function setParam(name, value) {
  url.searchParams.set(name, value);
}

function getParam(name) {
  return url.searchParams.get(name);
}

function getPosts() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5001/getAllPosts',
    }).done(result => {
      resolve(JSON.parse(result));
    });
  });
}

function getPost(id) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5001/getPost',
      data: { id },
    }).done(result => {
      resolve(JSON.parse(result)[0]);
    });
  });
}

function searchPost(key) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5001/searchPost',
      data: { key },
    }).done(result => {
      resolve(JSON.parse(result));
    });
  });
}

function onEnterKeyUp(e, fn) {
  const keyUp = e.key === 'Enter' || e.keyCode === 13;
  if (keyUp) fn.call();
}
