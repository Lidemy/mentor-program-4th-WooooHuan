const listMainNode = $('.list-main');
const template = $('.task-template');

$.ajax({
  type: "GET",
  url: "http://localhost/woo/week12/hw1/php/api_get_comments.php?site_key=woo"
}).done(
  initComments
).fail((res) => {
  console.log(res)
});

function initComments(dataList) {
  for (const data of dataList) {
    const comment = template.clone();
    comment.find('.task-nickname').text(data.nickname);
    comment.find('.task-text').text(data.content);
    comment.find('.del-btn').click(() => deleteComment(comment, data));
    comment.removeClass('task-template');
    listMainNode.append(comment);
  }
}

function deleteComment(comment, data) {
  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw1/php/api_del_comment.php",
    data
  }).done(() => {
    comment.remove();
  }).fail((res) => {
    console.log(res)
  });
}