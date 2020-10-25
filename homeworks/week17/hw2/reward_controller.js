const { Reward } = require('./db');
const rewardController = {
  getRewards: (req, res) => {
    Reward.findAll().then(data => {
      res.send(data[0].rewards);
    })
  },
    
  createRewards: (req, res) => {
    Reward.create(req.body).then(data => {
      res.send(data);
    });
  },

  updateRewards: (req, res) => {
    Reward.update(req.body, {
      where: { id: 1 },
    }).then((data) => {
      res.send(data);
    })
  },

  getResult: (req, res) => {
    Reward.findAll().then(data => {
      const rewards = JSON.parse(data[0].rewards);
      const sum = getSumOfWeight(rewards);
      const ran = sum * Math.random();
      const result = getRanResult(rewards, ran);
      res.send(JSON.stringify(result));
    });
  },
}

function getSumOfWeight(rewards) {
  let sum = 0;
  for (let reward of rewards) {
    sum += reward.weight;
  }
  return sum;
}

function getRanResult(rewards, ran) {
  for (let reward of rewards) {
    if (ran < reward.weight) {
      return reward;
    } 
    ran -= reward.weight;
  }
}

module.exports = rewardController;
