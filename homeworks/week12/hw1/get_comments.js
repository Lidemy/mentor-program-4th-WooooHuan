/* eslint-disable */

const listMainNode = $('.list-main');
const template = $('.task-template')

$.ajax({
  method: "GET",
  url: "http://localhost/woo/week12/hw1/api_get_comments.php?site_key=woo",
}).done((dataList) => {
  for (data of dataList) {
    const comment = template.clone();
    comment.find('.task-nickname').text(data.nickname);
    comment.find('.task-text').text(data.content);
    comment.find('.del-btn').click(() => comment.remove());
    comment.removeClass('task-template');
    listMainNode.append(comment);
  }
});
