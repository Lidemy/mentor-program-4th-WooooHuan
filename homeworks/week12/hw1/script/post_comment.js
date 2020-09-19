function postComment() {
  const nickname = $('.input-nickname').val();
  const content = $('.input-content').val();
  if (!nickname || !content) return;

  $.ajax({
    method: "POST",
    url: "http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_post_comment.php",
    data: {
      site_key: 'woo',
      nickname,
      content
    }
  }).done(getComments);
}

function onKeyUp(e) {
  const keyUp = e.key === 'Enter' || e.keyCode === 13;
  if (keyUp) postComment();
}

$('.new-task-btn').click(postComment);
$('.input-nickname').keyup(onKeyUp);
$('.input-content').keyup(onKeyUp);
