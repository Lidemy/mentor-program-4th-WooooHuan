const rewards = [];
//const rewardsInfo = ;

function createRewards(rewardsInfo) {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/createPost',
    data: { rewardsInfo },
  }).done(result => {
    resolve(JSON.parse(result));
  });
}

function initRewards() {
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
  createRewards(JSON.stringify(rewards));
}

initRewards();
