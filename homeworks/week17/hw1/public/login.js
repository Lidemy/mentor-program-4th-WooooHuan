const inputAcc = $('#input-account');
const inputPsw = $('#input-password');
const failedHint = $('.login-error');
 
function onBtnClick() {
  if(!inputAcc.val() || !inputPsw.val()) {
    loginFailed();
    return;
  }
  handleLogin();
}

function handleLogin() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/login',
    data: {
      account: inputAcc.val(),
      password: inputPsw.val(),
    },
  }).done(handleResult);
}

function handleResult(result) {
  if (result) {
    document.location = 'index.html';
  } else {
    loginFailed();
  }
}

function loginFailed() {
  failedHint.removeClass('hidden');
}

init().then((data) => {
  if (data.session.isLogin) {
    document.location = 'index.html';
    return;
  }
  $('.login-btn').click(onBtnClick);
});
