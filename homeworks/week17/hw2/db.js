const Sequelize = require('sequelize');
const sequelize = new Sequelize('***', '***', '***', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+08:00',
});
const { DataTypes } = require('sequelize');

const db = {};

const Reward = sequelize.define('woo_reward', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  rewards: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

db.Reward = Reward;

module.exports = db;
