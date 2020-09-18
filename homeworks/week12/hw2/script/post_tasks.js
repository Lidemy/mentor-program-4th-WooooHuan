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
  if (!user) { alert('User ID is null.'); return; }

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/php/push_tasks.php",
    data: {
      user,
      json: JSON.stringify(getTasks())
    }
  });
}

function pullTasks() {
  const user = $('.tools-id').val();
  if (!user) { alert('User ID is null.'); return; }

  $.ajax({
    method: "POST",
    url: "http://localhost/woo/week12/hw2/php/pull_tasks.php",
    data: { user }
  }).done(importTasksFromJson);
}

function importTasksFromJson(data) {
  if (!data) return;
  root.empty();
  const tasks = JSON.parse(data);
  if (!tasks.length) return;
  for (task of tasks.reverse()) {
    initNewTask(task.content, task.checked);
  }
}

$('#push-btn').click(pushTasks);
$('#pull-btn').click(pullTasks);
