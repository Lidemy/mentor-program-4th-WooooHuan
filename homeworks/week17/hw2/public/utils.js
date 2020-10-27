function Delegate() {
  const _fnQueue = [];
  const delegate = {
    add: (fn) => {
      if (!fn instanceof Function) return;
      _fnQueue.push(fn);
    },
    execute: () => {
      console.log('execute');
      for (fn of _fnQueue) fn();
    }
  };
  return delegate;
}

function getRewards() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://lottery-practice.woooohuan.tw/getRewards',
    }).done(resolve);
  });
}

function getResult() {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: 'POST',
      url: 'http://lottery-practice.woooohuan.tw/getResult',
    }).done(resolve);
  });
}

function updateRewards(rewards) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "POST",
      url: 'http://lottery-practice.woooohuan.tw/updateRewards',
      data: { rewards },
    }).done(resolve);
  });
}

function getRewardHtml(reward) {
  const tmp =
  `<tr class="reward-template">
    <td align="center">
    <input class="input-img-url" type="text" style="width:360px;" value="${reward.imgUrl}">
    </td>
    <td align="center">
      <input class="input-description" type="text" style="width:360px;" value="${reward.description}">
    </td>
    <td align="center">
      <input class="input-weight" type="text" style="width:80px;" value="${reward.weight}">
    </td>
    <td align="center">
      <button class="delete-btn">Delete</button>
    </td>
  </tr>`;
  return tmp;
}

function getSettings() {
  const $inputList = $('.reward-template');
  const settings = [];
  for (let input of $inputList) {
    settings.push(getInputValues($(input)));
  }
  return JSON.stringify(settings);
}

function getInputValues($root) {
  const values = {
    imgUrl: $root.find('.input-img-url').val(),
    description: $root.find('.input-description').val(),
    weight: parseWeight($root.find('.input-weight').val()),
  };
  return values;
}

function resetInputValues($root) {
  $root.find('.input-img-url').val('');
  $root.find('.input-description').val('');
  $root.find('.input-weight').val('');
}

function resetRewardView() {
  setImgUrl('./img/icon_default.png');
  setDescription('試試手氣啦！');
}

function parseWeight(value) {
  let weight = parseInt(value, 10);
  return isNaN(weight) ? 1 : Math.max(weight, 1);
}

function isThatPropsAreExist(obj) {
  for (let prop in obj) {
    if (!obj[prop]) return false;
  } 
  return true;
}

function setImgUrl(str) {
  $img.attr('src', str);
}

function setDescription(str) {
  $description.text(str);
}
