init().then(handleLogout);

function handleLogout() {
  $.ajax({
    method: 'POST',
    url: 'http://localhost:5001/logout',
  }).done(() => {
    document.location = 'index.html';
  });
}
