const $rewardRoot = $('.reward-root');
const $createRoot = $('.tr-create-reward');
const $secLottery = $('.sec-lottery');
const $secSettings = $('.sec-settings');
const $lotteryBtn = $('.lottery-btn');
const $settingsBtn = $('.settings-btn');
const $doneBtn = $('.done-btn');
const $createBtn = $('.create-btn');
const $error = $('.error');
const $img = $('.reward-image');
const $description = $('.reward-description');
let rewards;

$lotteryBtn.click(async () => {
  $lotteryBtn.attr('disabled', true);
  $img.removeClass('scale-anim');
  const result = JSON.parse(await getResult());
  setImgUrl(result.imgUrl);
  setDescription(result.description);
  $lotteryBtn.attr('disabled', false);
  
  $img.addClass('scale-anim');
  playImgAnim();
});

$settingsBtn.click(async () => {
  $secLottery.hide();
  showError(false);
  await renderSettings();
  $secSettings.show();
});

$doneBtn.click(async () => {
  $secSettings.hide();
  const settings = getSettings();
  await updateRewards(settings);
  resetInputValues($createRoot);
  resetRewardView();
  $secLottery.show();
  playImgAnim();
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
