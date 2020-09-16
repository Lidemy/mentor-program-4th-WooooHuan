/* eslint-disable */

const listMainNode = $('.list-main');
const template = $('.task-template')

$.ajax({
  method: "GET",
  url: "http://localhost/woo/week12/hw1/api_get_comments.php?site_key=woo",
}).done((dataList) => {
  for (const data of dataList) {
    const comment = template.clone();
    comment.find('.task-nickname').text(data.nickname);
    comment.find('.task-text').text(data.content);
    console.log(data);
    comment.find('.del-btn').click(() => {
      $.ajax({
        method: "POST",
        url: "http://localhost/woo/week12/hw1/api_del_comment.php",
        data: data
      }).done((data) => {
        console.log(data);
        comment.remove()
      });
    });
    comment.removeClass('task-template');
    listMainNode.append(comment);
  }
});
