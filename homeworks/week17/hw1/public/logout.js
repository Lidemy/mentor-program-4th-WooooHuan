function handleLogout() {
  console.log('start logout');
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/logout',
  }).done(() => {
    console.log('logout');
    document.location = 'index.html';
  });
}

console.log('init logout');
init().then(handleLogout);
