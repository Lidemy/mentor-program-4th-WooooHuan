const { Admin } = require('./db');

function getLoginResult(input, result) {
  if (!result) return false;
  return input.password === result.password;
}

const adminController = {
  login: (req, res) => {
    Admin.findAll({
      where: {
        account: req.body.account,
      },
    }).then(data => {
      const result = data[0];
      if (getLoginResult(req.body, result)) {
        req.session.isLogin = true;
        req.session.account = result.account;
      }
      res.send(getLoginResult(req.body, result));
    });
  },

  logout: (req, res) => {
    req.session.isLogin = false;
    req.session.account = null;
    res.send(req.session);
  },

  getSession: (req, res) => {
    res.send(req.session);
  },
}

module.exports = adminController;
