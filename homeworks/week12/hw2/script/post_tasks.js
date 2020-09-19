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
    url: "http://mentor-program.co/mtr04group5/woo/week12/hw2/php/push_tasks.php",
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
    url: "http://mentor-program.co/mtr04group5/woo/week12/hw2/php/pull_tasks.php",
    data: { user }
  }).done(importTasksFromJson);
}

$('#push-btn').click(pushTasks);
$('#pull-btn').click(pullTasks);
