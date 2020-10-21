async function init() {
  const data = {};
  data.session = await getSession();
  return new Promise((resolve, reject) => {
    resolve(data);
  });
}

function getSession() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5001/getSession',
    }).done(result => {
      resolve(result);
    });
  });
}
