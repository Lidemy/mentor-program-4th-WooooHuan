const inputTitle = $('.input-title');
const inputContent = $('.input-content');
const failedHint = $('.post-error');
const id = getParam('id');
let session = {};

function onSubmitBtnClick() {
  if(!inputTitle.val() || !inputContent.val()) {
    submitFailed();
    return;
  }
  updatePost();
}

function updatePost() {
  $.ajax({
    method: "POST",
    url: "http://localhost:5001/updatePost",
    data: {
      id,
      title: inputTitle.val(),
      content: inputContent.val(),
    },
  }).done(() => {
    document.location = `post.html?id=${id}`;
  });
}

function onDelBtnClick() {
  $.ajax({
    method: "POST",
    url: "http://localhost:5001/deletePost",
    data: {
      id,
    },
  }).done(() => {
    document.location = 'index.html';
  });
}

function submitFailed() {
  failedHint.removeClass('hidden');
}

async function renderEditPost() {
  const post = await getPost(id);
  inputTitle.val(post.title);
  inputContent.val(post.content);
}

init().then((data) => {
  if (!data.session.isLogin) {
    document.location = 'index.html';
    return;
  }
  session = data.session;
  $('.submit-btn').click(onSubmitBtnClick);
  $('.del-btn').click(onDelBtnClick);
  renderEditPost();
});
