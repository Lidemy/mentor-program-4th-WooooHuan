awakeQueue.add(handleLogout);

function handleLogout() {
  $.ajax({
    method: 'POST',
    url: 'http://blog-practice.woooohuan.tw/logout',
  }).done(() => {
    document.location = 'index.html';
  });
}
