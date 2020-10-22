const express = require('express');
const bodyParser = require('body-parser');
const rewardController = require('./reward_controller');

const app = express();
const port = 5001;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/getRewards', rewardController.getRewards);
//app.post('/createReward', rewardController.createRewards);
app.post('/updateRewards', rewardController.updateRewards);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
