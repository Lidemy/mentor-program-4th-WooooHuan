const $rewardRoot = $('.reward-root');
const $createRoot = $('.tr-create-reward');
const $secLottery = $('.sec-lottery');
const $secSettings = $('.sec-settings');
const $lotteryBtn = $('.lottery-btn');
const $settingsBtn = $('.settings-btn');
const $error = $('.error');
const $doneBtn = $('.done-btn');
const $createBtn = $('.create-btn');
let rewards;

$settingsBtn.click(async () => {
  $secLottery.hide();
  showError(false);
  resetInputValues($createRoot);
  await renderSettings();
  $secSettings.show();
});

$doneBtn.click(async () => {
  $secSettings.hide();
  const settings = getSettings();
  await updateRewards(settings);
  $secLottery.show();
});

$createBtn.click(async () => { 
  const reward = getInputValues($createRoot);
  const isLegaled = isThatPropsAreExist(reward);
  if (isLegaled) {
    appendRewardElement(reward);
    resetInputValues($createRoot);
  }
  showError(!isLegaled);
});

async function renderSettings() {
  if (rewards) return;
  rewards = JSON.parse(await getRewards());
  for (let reward of rewards) {
    appendRewardElement(reward);
  }
}

function appendRewardElement(reward) {
  const $reward = $(getRewardHtml(reward));
  const $delBtn = $reward.find('.delete-btn');
  $delBtn.click(() => $reward.remove());
  $rewardRoot.append($reward);
}

function showError(bool) {
  $error.css('display', bool ? 'block' : 'none');
}
