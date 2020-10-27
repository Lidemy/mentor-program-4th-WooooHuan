const express = require('express');
const bodyParser = require('body-parser');
const rewardController = require('./reward_controller');

const app = express();
const port = 5002;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/getRewards', rewardController.getRewards);
app.post('/updateRewards', rewardController.updateRewards);
app.post('/getResult', rewardController.getResult);
//app.post('/createReward', rewardController.createRewards);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
