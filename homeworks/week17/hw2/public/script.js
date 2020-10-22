const rewardRoot = $('.reward-root');
const secLottery = $('.sec-lottery');
const secSettings = $('.sec-settings');
const lotteryBtn = $('.lottery-btn');
const settingsBtn = $('.settings-btn');
const doneBtn = $('.done-btn');
const createBtn = $('.create-btn');
let rewardList = [];

(async () => {
  rewardJson = await getRewards();
  renderPage();
  initBtns();
  settingsBtn.click(onSettingsBtn);
  doneBtn.click(onDoneBtn);
  console.log(rewardJson);
})();

function getRewards() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://localhost:5001/getRewards',
    }).done(resolve);
  });
}

function initBtns() {

}

function renderPage() {

}

function onSettingsBtn() {
  secLottery.hide();
  secSettings.show();
}

function onDoneBtn() {
  secLottery.show();
  secSettings.hide();
}

/*function initRewards() {
  for (let i = 0; i < 5; i++) {
    rewards.push({
      imgUrl: `imgUrl ${i}`,
      description: `description ${i}`,
      weight: `weight ${i}`,
    });
  }
  console.log(rewards);
  console.log(JSON.stringify(rewards));
  console.log(JSON.parse(JSON.stringify(rewards)));
}

initRewards();
*/

/*function updateRewards() {
  $.ajax({
    method: "POST",
    url: "http://localhost:5001/updateRewards",
    data: {
      rewards: JSON.stringify(rewards),
    },
  }).done(() => {
    document.location = 'index.html';
  });
}*/