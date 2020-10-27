const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const sequelize = new Sequelize('***', '***', '***', {
  host: 'localhost',
  dialect: 'mysql',
  timezone: '+08:00',
});
const { DataTypes } = require('sequelize');

const db = {};

const Post = sequelize.define('woo_blog_posts', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  author: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  title: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  isDelete: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
}, {
  freezeTableName: true,
});

const Admin = sequelize.define('woo_blog_admin', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  account: {
    type: Sequelize.TEXT,
    allowNull: false,
    unique: 'compositeIndex',
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  nickname: {
    type: Sequelize.TEXT,
    allowNull: false,
  }
}, {
  freezeTableName: true,
});

db.Post = Post;
db.Admin = Admin;
db.Op = Op;

module.exports = db;
