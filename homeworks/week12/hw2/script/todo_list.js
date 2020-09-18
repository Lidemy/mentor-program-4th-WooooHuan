const root = $('.list-tasks');
let visibleCategory = 'all';

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
  task.find('#check-btn').click(() => checkTask(task));
  task.find('#del-btn').click(() => task.remove());
  task.removeClass('task-template');
  if (checked) checkTask(task);
  root.prepend(task);
  renderTasks();
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
    switch (visibleCategory) {
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

function onNewBtnClicked() {
  const taskVal = $('.new-task-input').val();
  if (!taskVal) { alert('Task title is null.'); return; }

  initNewTask(taskVal, false);
  $('.new-task-input').val('');
}

$('#clean-btn').click(() => root.empty());
$('#new-btn').click(onNewBtnClicked);
$('.input-category').click((e) => {
  visibleCategory = e.currentTarget.value;
  renderTasks();
});
