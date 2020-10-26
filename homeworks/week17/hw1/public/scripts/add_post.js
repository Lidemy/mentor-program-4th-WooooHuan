const inputTitle = $('.input-title');
const inputContent = $('.input-content');
const failedHint = $('.post-error');
let session = {};

awakeQueue.add((data) => {
  if (!data.session.isLogin) {
    document.location = 'index.html';
    return;
  }
  session = data.session;
  $('.submit-btn').click(onBtnClick);
});

function onBtnClick() {
  if(!inputTitle.val() || !inputContent.val()) {
    submitFailed();
    return;
  }
  createPost(session.account);
}

function createPost(author) {
  $.ajax({
    method: "POST",
    url: "http://localhost:5001/createPost",
    data: {
      author,
      title: inputTitle.val(), 
      content: inputContent.val(),
    },
  }).done((data) => {
    document.location = `post.html?id=${data.id}`;
  });
}

function submitFailed() {
  failedHint.removeClass('hidden');
}
