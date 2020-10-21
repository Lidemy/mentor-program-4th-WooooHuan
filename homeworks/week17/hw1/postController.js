const { Post } = require('./db');

const postController = {
  searchPost: (req, res) => {
    Post.findAll({
      where: {
        title: {
          $like: `%${req.body.content}%`
        }
      },
      order: [
        ['id', 'DESC'],
      ],
    }).then(posts => {
      res.send(JSON.stringify(posts, null, 2));
    });
  },

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
    if(!req.session) res.send(false);
    Post.update(req.body, {
      where: {
        id: req.body.id,
        author: req.session.account,
      },
    }).then(data => {
      res.send(data);
    }).catch(() => {
      res.send(false);
    });
  },

  deletePost: (req, res) => {
    if(!req.session) res.send(false);
    Post.update({
      isDelete: '1',
    }, {
      where: {
        id: req.body.id,
        author: req.session.account,
      },
    }).then(data => {
      res.send(data);
    }).catch(() => {
      res.send(false);
    });
  },
}

module.exports = postController;
