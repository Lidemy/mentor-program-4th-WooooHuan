import $ from 'jquery';
import { css, template } from './templates';

export function init(key, container) {
  let limit = 5;
  let root;
  let inputNickname;
  let inputContent;
  injectHtml();
  initInput();
  getComments();

  function injectHtml() {
    $(container).append(template(key));
    $('head').append(css);
  }

  function initInput() {
    root = $(`.${key}-list-tasks`);
    inputNickname = $(`.${key}-input-nickname`);
    inputContent = $(`.${key}-input-content`);
    $(`.${key}-new-task-btn`).click(postComment);
    inputNickname.keyup(onKeyUp);
    inputContent.keyup(onKeyUp);
    blockInput(true);
    initShowMoreBtn();
  }

  function blockInput(isBlock) {
    $('.input-blocker').css("display",
      isBlock ? 'block' : 'none');
  }

  function cleanLayout() {
    inputNickname.val('');
    inputContent.val('');
    root.empty();
  }

  function getComments() {
    $.ajax({
      type: "GET",
      url: `http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_get_comments.php?site_key=${key}&limit=${limit + 1}`
    }).done(initComments);
  }

  function initComments(data) {
    cleanLayout();
    const count = data.length <= limit ? data.length : data.length - 1;

    for (let i = 0; i < count; i++) {
      const comment = $(`.${key}-task-template`).clone();
      comment.find('.task-nickname').text(data[i].nickname);
      comment.find('.task-text').text(data[i].content);
      comment.find('.del-btn').click(() => deleteComment(data[i]));
      comment.removeClass(`${key}-task-template`);
      comment.removeClass('task-template');
      root.append(comment);
    }

    $(`.${key}-more-element`).css("display",
      data.length > limit ? 'block' : 'none');

    blockInput(false);
  }

  function deleteComment(data) {
    blockInput(true);
    $.ajax({
      method: "POST",
      url: "http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_del_comment.php",
      data
    }).done(getComments);
  }

  function postComment() {
    blockInput(true);
    const nickname = inputNickname.val();
    const content = inputContent.val();
    if (!nickname || !content) return;

    $.ajax({
      method: "POST",
      url: "http://mentor-program.co/mtr04group5/woo/week12/hw1/php/api_post_comment.php",
      data: {
        site_key: key,
        nickname,
        content
      }
    }).done(getComments);
  }

  function initShowMoreBtn() {
    $(`.${key}-more-btn`).click(() => {
      limit += 5;
      getComments();
    });
  }

  function onKeyUp(e) {
    const keyUp = e.key === 'Enter' || e.keyCode === 13;
    if (keyUp) postComment();
  }
}
