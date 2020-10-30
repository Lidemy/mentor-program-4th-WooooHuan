const inputTitle = $('.input-title');
const inputContent = $('.input-content');
const failedHint = $('.post-error');
const id = getParam('id');

awakeQueue.add((data) => {
  if (!data.session.isLogin) {
    document.location = 'index.html';
    return;
  }
  $('.submit-btn').click(onSubmitBtnClick);
  $('.del-btn').click(onDelBtnClick);
  renderEditPost();
});

async function renderEditPost() {
  const post = await getPost(id);
  inputTitle.val(post.title);
  inputContent.val(post.content);
}

function onDelBtnClick() {
  $.ajax({
    method: "POST",
    url: "http://blog-practice.woooohuan.tw/deletePost",
    data: {
      id,
    },
  }).done(() => {
    document.location = 'index.html';
  });
}

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
    url: "http://blog-practice.woooohuan.tw/updatePost",
    data: {
      id,
      title: inputTitle.val(),
      content: inputContent.val(),
    },
  }).done(() => {
    document.location = `post.html?id=${id}`;
  });
}

function submitFailed() {
  failedHint.removeClass('hidden');
}
