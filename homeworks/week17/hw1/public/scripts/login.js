const inputAcc = $('#input-account');
const inputPsw = $('#input-password');
const failedHint = $('.login-error');

awakeQueue.add((data) => {
  if (data.session.isLogin) {
    document.location = 'index.html';
    return;
  }
  $('.login-btn').click(onBtnClick);
  inputAcc.keyup((e) => onEnterKeyUp(e, onBtnClick));
  inputPsw.keyup((e) => onEnterKeyUp(e, onBtnClick));
});

function onBtnClick() {
  if (!inputAcc.val() || !inputPsw.val()) {
    loginFailed();
    return;
  }
  handleLogin();
}

function handleLogin() {
  $.ajax({
    method: 'POST',
    url: 'http://blog-practice.woooohuan.tw/login',
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
