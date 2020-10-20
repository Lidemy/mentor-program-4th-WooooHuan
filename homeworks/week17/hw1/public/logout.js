function handleLogout() {
  console.log('lll');
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/logout',
  }).done(() => {
    console.log('logout');
    document.location = 'index.html';
  });
}

init().then(handleLogout);
