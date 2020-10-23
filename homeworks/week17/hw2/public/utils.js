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
      url: 'http://localhost:5001/getRewards',
    }).done(resolve);
  });
}

function updateRewards(rewards) {
  return new Promise((resolve, reject) => {
    $.ajax({
      method: "POST",
      url: "http://localhost:5001/updateRewards",
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
      <input class="input-weight" type="text" style="width:80px;" value="${reward.description}">
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
    const $elem = $(input);
    settings.push({
      imgUrl: $elem.find('.input-img-url').val(),
      description: $elem.find('.input-description').val(),
      weight: parseWeight($elem.find('.input-weight').val()),
    });
  }
  return JSON.stringify(settings);
}

function parseWeight(value) {
  let weight = parseInt(value, 10);
  return isNaN(weight) ? 1 : Math.max(weight, 1);
}
