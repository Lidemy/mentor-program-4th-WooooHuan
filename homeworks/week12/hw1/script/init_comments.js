const root = $('.list-tasks');
let limit = 5;

function cleanLayout() {
  $('.input-nickname').val('');
  $('.input-content').val('');
  root.empty();
}

function getComments() {
  $.ajax({
    type: "GET",
    url: `http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_get_comments.php?site_key=woo&limit=${limit + 1}`
  }).done(initComments);
}

function initComments(data) {
  cleanLayout();
  const count = data.length <= limit ? data.length : data.length - 1;

  for (let i = 0; i < count; i++) {
    const comment = $('.task-template').clone();
    comment.find('.task-nickname').text(data[i].nickname);
    comment.find('.task-text').text(data[i].content);
    comment.find('.del-btn').click(() => deleteComment(data[i]));
    comment.removeClass('task-template');
    root.append(comment);
  }
  if (data.length <= limit) {
    $('.more-element').hide();
  } else {
    $('.more-element').show();
  }
}

function deleteComment(data) {
  $.ajax({
    method: "POST",
    url: "http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_del_comment.php",
    data
  }).done(getComments);
}

function initShowMoreBtn() {
  $('.more-btn').click(() => {
    limit += 5;
    getComments();
  });
}

initShowMoreBtn();
getComments();
