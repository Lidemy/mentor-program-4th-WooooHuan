const { Post } = require('./db');

const postController = {
  getAllPosts: (req, res) => {
    Post.findAll({
      order: [
        ['id', 'DESC'],
      ],
    }).then(posts => {
      res.send(JSON.stringify(posts, null, 2));
    });
  },

  getPost: (req, res) => {
    Post.findAll({
      where: {
        id: req.body.id,
      },
    }).then(post => {
      res.send(JSON.stringify(post, null, 2));
    });
  },

  createPost: (req, res) => {
    if (req.session.isLogin) {
      Post.create(req.body).then(data => {
        res.send(data);
      });
    }
  },

  updatePost: (req, res) => {
    Post.update(req.body, {
      where: {
        id: req.body.id,
        author: req.session.account,
      },
    }).then(data => {
      res.send(data);
    });
  },

  deletePost: (req, res) => {
    Post.update({
      isDelete: '1',
    }, {
      where: {
        id: req.body.id,
        author: req.session.account,
      },
    }).then(data => {
      res.send(`The post that "id: ${req.body.id}" is deleted!`);
    });
  },
}

module.exports = postController;
