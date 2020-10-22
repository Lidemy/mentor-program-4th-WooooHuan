const { Reward } = require('./db');

const rewardController = {
  /*createReward: (req, res) => {
    Reward.create(req.body).then(data => {
      res.send(data);
    });
  },*/

  updateReward: (req, res) => {
    Reward.update(req.body, {
      where: { id: 1 },
    }).then((data) => {
      res.send(data);
    })
  },
}

module.exports = rewardController;
