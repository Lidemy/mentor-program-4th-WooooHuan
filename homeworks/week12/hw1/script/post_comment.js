$('.new-task-btn').click(() => {
  const nickname = $('.input-nickname').val();
  const content = $('.input-content').val();
  if (!nickname || !content) return;
  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw1/php/api_post_comment.php",
    data: {
      site_key: 'woo',
      nickname,
      content
    }
  }).done(() => location.reload());
});
