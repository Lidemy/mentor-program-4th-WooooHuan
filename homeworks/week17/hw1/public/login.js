const inputAcc = $('#input-account');
const inputPsw = $('#input-password');
const failedHint = $('.login-error');

$('.login-btn').click(() => {
  if(!inputAcc.val() || !inputPsw.val()) {
    loginFailed();
    return;
  }
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/login',
    data: {
      account: inputAcc.val(),
      password: inputPsw.val(),
    },
  }).done(result => {
    console.log(result);
    if (result) {
      $.ajax({
        method: 'POST',
        url: 'http://localhost:5001/isLogin',
      }).done(data => {
        console.log(data);
      });
    } else {
      loginFailed();
    }
  });
});

function loginFailed() {
  failedHint.removeClass('hidden');
}

$.ajax({
  method: 'POST',
  url: 'http://localhost:5001/isLogin',
}).done(data => {
  console.log(data);
});