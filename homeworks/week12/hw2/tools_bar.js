const root = $('.list-tasks');

function pushTasks() {
  const user = $('.tools-id').val();
  if (!user) return;

  const taskList = [];
  const tasks = root.find('.task-element');
  for (task of tasks) {
    taskList.push({
      content: $(task).find('.task-text').text(),
      checked: $(task).hasClass('checked')
    });
  }

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/push_tasks.php",
    data: {
      user,
      json: JSON.stringify(taskList)
    }
  });
}

function pullTasks() {
  const user = $('.tools-id').val();
  if (!user) return;

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/pull_tasks.php",
    data: { user }
  }).done(importTasksFromJson);
}

function importTasksFromJson(data) {
  if(!data || !data.length) return;
  root.empty();
  const tasks = JSON.parse(data);
  for (task of tasks) {
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
}

function setNewTask(content, checked) {
  const task = $('.task-template').clone();
  task.find('.task-text').text(content);
  task.find('#check-btn').click(() => checkTask(task));
  task.find('#del-btn').click(() => task.remove());
  task.removeClass('task-template');
  if (checked) checkTask(task);
  root.append(task);
}

function onNewBtn() {
  const taskVal = $('.new-task-input').val();
  if (!taskVal) return;
  setNewTask(taskVal, false);
  $('.new-task-input').val('');
}

$('#clean-btn').click(() => root.empty());
$('#new-btn').click(onNewBtn);
$('#push-btn').click(pushTasks);
$('#pull-btn').click(pullTasks);
