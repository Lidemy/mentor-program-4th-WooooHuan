const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const postController = require('./post_controller');
const adminController = require('./admin_controller');

const app = express();
const port = 5001;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: '5566',
  resave: false,
  saveUninitialized: true,
}));

app.post('/searchPost', postController.searchPost);
app.post('/getAllPosts', postController.getAllPosts);
app.post('/getPost', postController.getPost);
app.post('/createPost', postController.createPost);
app.post('/updatePost', postController.updatePost);
app.post('/deletePost', postController.deletePost);
app.post('/login', adminController.login);
app.post('/logout', adminController.logout);
app.post('/getSession', adminController.getSession);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
