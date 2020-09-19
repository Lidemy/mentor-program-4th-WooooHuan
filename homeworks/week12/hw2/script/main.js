const root = $('.list-tasks');
let editingTask = null;

function getCurrCategory() {
  return $('input[name=\'category\']:checked').val();
}

function importTasksFromJson(data) {
  if (!data) return;
  root.empty();
  const tasks = JSON.parse(data);
  for (task of tasks.reverse()) {
    initNewTask(task.content, task.checked);
  }
}

function initNewTask(content, checked) {
  const task = $('.task-template').clone();
  task.find('.task-text').text(content);
  task.find('.task-text').click(() => editTask(task));
  task.find('.task-text').click((e) => e.stopPropagation());
  task.find('.edit-text').hide();
  task.find('.edit-text').val(content);
  task.find('.edit-text').click((e) => e.stopPropagation());
  task.find('.edit-text').keyup((e) => onEnterKeyUp(e, endTheLatestEditing));
  task.find('#check-btn').click(() => checkTask(task));
  task.find('#del-btn').click(() => task.remove());
  task.removeClass('task-template');
  if (checked) checkTask(task);
  root.prepend(task);
  renderTasks();
}

function editTask(task) {
  endTheLatestEditing();
  editingTask = task;
  task.find('.edit-text').show();
  task.find('.task-text').hide();
}

function endTheLatestEditing() {
  if (!editingTask) return;
  editingTask.find('.task-text').text(
    editingTask.find('.edit-text').val()
  );
  editingTask.find('.task-text').show();
  editingTask.find('.edit-text').hide();
  editingTask = null;
}

function checkTask(task) {
  task.toggleClass('checked');
  const checked = task.hasClass('checked');
  task.find('#check-btn').text(checked ? '↩️' : '✔️');
  task.find('.task-sign').text(checked ? '🏁' : '🚩');
  task.find('.task-sign').toggleClass('checked-sign');
  task.find('.task-text').toggleClass('checked-text');
  renderTasks();
}

function renderTasks() {
  const tasks = root.find('.task-element');
  for (task of tasks) {
    switch (getCurrCategory()) {
      case 'todo':
        $(task).css("display", 
          $(task).hasClass('checked') ? 'none' : 'block');
        break;
      case 'done':
        $(task).css("display", 
          $(task).hasClass('checked') ? 'block' : 'none');
        break;
      default:
        $(task).show();
        break;
    }
  }
}

function addNewTask() {
  const taskVal = $('.new-task-input').val();
  if (!taskVal) { alert('Task title is null.'); return; }
  initNewTask(taskVal, false);
  $('.new-task-input').val('');
}

function cleanCompletedTasks() {
  const tasks = root.find('.task-element');
  for (task of tasks) {
    if ($(task).hasClass('checked')) $(task).remove();
  }
}

function onEnterKeyUp(e, fn) {
  const keyUp = e.key === 'Enter' || e.keyCode === 13;
  if (keyUp) fn.call();
}

$('#clean-btn').click(cleanCompletedTasks);
$('#new-btn').click(addNewTask);
$('.input-category').click(renderTasks);
$('.new-task-input').keyup((e) => onEnterKeyUp(e, addNewTask));
$(window).click(endTheLatestEditing);
