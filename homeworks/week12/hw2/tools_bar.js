const root = $('.list-tasks');
let visibleCategory = 'all';
let snapshot = '';

function getTasks() {
  const taskList = [];
  const tasks = root.find('.task-element');
  for (task of tasks) {
    taskList.push({
      content: $(task).find('.task-text').text(),
      checked: $(task).hasClass('checked')
    });
  }
  return taskList;
}

function pushTasks() {
  const user = $('.tools-id').val();
  if (!user) {
    alert('User ID is null.');
    return;
  }

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/push_tasks.php",
    data: {
      user,
      json: JSON.stringify(getTasks())
    }
  });
}

function pullTasks() {
  const user = $('.tools-id').val();
  if (!user) {
    alert('User ID is null.');
    return;
  }

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/pull_tasks.php",
    data: { user }
  }).done(importTasksFromJson);
}

function importTasksFromJson(data) {
  if (!data) return;
  root.empty();
  const tasks = JSON.parse(data);
  for (task of tasks.reverse()) {
    setNewTask(task.content, task.checked);
  }
}

function checkTask(task) {
  task.toggleClass('checked');
  const checked = task.hasClass('checked');
  task.find('#check-btn').text(checked ? '↩️' : '✔️');
  task.find('.task-sign').text(checked ? '🏁' : '🚩');
  task.find('.task-sign').toggleClass('checked-sign');
  task.find('.task-text').toggleClass('checked-text');
  showTasks();
}

function setNewTask(content, checked) {
  const task = $('.task-template').clone();
  task.find('.task-text').text(content);
  task.find('#check-btn').click(() => checkTask(task));
  task.find('#del-btn').click(() => task.remove());
  task.removeClass('task-template');
  if (checked) checkTask(task);
  root.prepend(task);
  showTasks();
}

function onNewBtn() {
  const taskVal = $('.new-task-input').val();
  if (!taskVal) {
    alert('Task title is null.');
    return;
  }
  setNewTask(taskVal, false);
  $('.new-task-input').val('');
}

$('#clean-btn').click(() => root.empty());
$('#new-btn').click(onNewBtn);
$('#push-btn').click(pushTasks);
$('#pull-btn').click(pullTasks);
$('.input-category').click((e) => {
  visibleCategory = e.currentTarget.value;
  showTasks()
});

function showTasks() {
  const tasks = root.find('.task-element');
  for (task of tasks) {
    switch (visibleCategory) {
      case 'todo':
        if ($(task).hasClass('checked')) {
          $(task).hide();
        } else {
          $(task).show();
        }
        break;

      case 'done':
        if (!$(task).hasClass('checked')) {
          $(task).hide();
        } else {
          $(task).show();
        }
        break;

      default:
        $(task).show();
        break;
    }
  }
}