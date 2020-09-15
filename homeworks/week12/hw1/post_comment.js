/* eslint-disable */

$('.new-task-btn').click(() => {
  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw1/api_post_comment.php",
    data: {
      site_key: 'woo',
      nickname: $('.input-nickname').val(),
      content: $('.input-content').val()
    }
  }).done(() => location.reload());
});
