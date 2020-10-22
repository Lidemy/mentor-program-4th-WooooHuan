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
}

module.exports = rewardController;
