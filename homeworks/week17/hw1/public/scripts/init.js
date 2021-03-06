const awakeQueue = new Delegate();

(async function awake() {
  const data = await init();
  awakeQueue.execute(data);
})();

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
      url: 'http://blog-practice.woooohuan.tw/getSession',
    }).done(result => {
      resolve(result);
    });
  });
}
