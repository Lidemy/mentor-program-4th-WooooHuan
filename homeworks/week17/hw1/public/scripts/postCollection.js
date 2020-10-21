const postsPerPage = 20;
let currentPage = 1;

$.ajax({
  method: "POST",
  url: "http://localhost:5001/getAllPosts",
}).done(data => {
  console.log(JSON.parse(data));
});

$.ajax({
  method: "POST",
  url: "http://localhost:5001/getPost",
  data: {
    id: '70',
  },
}).done(data => {
  console.log(JSON.parse(data));
});

$.ajax({
  method: "POST",
  url: "http://localhost:5001/createPost",
  data: {
    author: 'author test yo', 
    title: 'title test yo', 
    content: 'content test yo',
  },
}).done((data) => {
  console.log(data);
});

$.ajax({
  method: "POST",
  url: "http://localhost:5001/updatePost",
  data: {
    id: '100',
    title: 'update title test yo',
    content: 'update content test yo',
  },
}).done((data) => {
  console.log(data);
});

$.ajax({
  method: "POST",
  url: "http://localhost:5001/deletePost",
  data: {
    id: '90',
  },
}).done((data) => {
  console.log(data);
});