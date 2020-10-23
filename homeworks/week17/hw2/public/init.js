const $rewardRoot = $('.reward-root');
const $secLottery = $('.sec-lottery');
const $secSettings = $('.sec-settings');
const $lotteryBtn = $('.lottery-btn');
const $settingsBtn = $('.settings-btn');
const $doneBtn = $('.done-btn');
const $createBtn = $('.create-btn');

$settingsBtn.click(async () => {
  $secLottery.hide();
  const rewards = JSON.parse(await getRewards());
  for (let reward of rewards) {
    const $reward = $(getRewardHtml(reward));
    const $delBtn = $reward.find('.delete-btn');
    $delBtn.click(() => $reward.remove);
    $rewardRoot.append($reward);
  }
  $secSettings.show();
});

$doneBtn.click(async () => {
  $secSettings.hide();
  const settings = getSettings();
  await updateRewards(settings);
  $secLottery.show();
});
