<?php
session_start();
require_once("conn.php");
require_once("utils.php");

$post_id = 1;
if (!empty($_GET['id'])) {
  $post_id = intval($_GET['id']);
}

$sql = 'SELECT * ' .
  'FROM woo_blog_posts AS posts ' .
  'WHERE posts.id = ?';

$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $post_id);
$result = getResultFromStmt($stmt);
$row = $result->fetch_assoc();
$author = escape($acc_info['account']) .
  ' (' . escape($acc_info['nickname']) . ')';

$title = $row['title'];
$content = $row['content'];

echo escape($title);

$_SESSION['post_id'] = $post_id;

?>
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>看板 Woo's Board 編輯文章 - Lidemy實業坊 </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="./css/bbs-common.css">
  <link rel="stylesheet" type="text/css" href="./css/bbs-base.css" media="screen">
  <link rel="stylesheet" type="text/css" href="./css/bbs-custom.css">
  <link rel="stylesheet" type="text/css" href="./css/pushstream.css" media="screen">
  <link rel="stylesheet" type="text/css" href="./css/bbs-print.css" media="print">
  <link rel="stylesheet" type="text/css" href="./css/post.css">
</head>

<body>
  <div id="topbar-container">
    <div id="topbar" class="bbs-content">
      <a id="logo" href="index.php">Lidemy實業坊</a>
      <span>›</span>
      <a class="board" href="index.php"><span class="board-label">看板 </span>Woo's_Board</a>
      <?php
      echo $account ? '<a class="right small" href="logout.php">管理員登出</a>' : '<a class="right small" href="login.php">管理員登入</a>';
      ?>
    </div>
  </div>

  <div class="post-container">
    <div class="edit-post">
      <form class="post-form" method="POST" action="update_post.php">
        <div class="post-input">
          <input class="query" type="text" name="title" value="<?php echo escape($title) ?>" placeholder="輸入文章標題...">
          <textarea class="post-content query" name="content"><?php echo escape($content) ?></textarea>
        </div>
        <div><input class="login-btn btn" type="submit" value="更新" /><a class="login-btn del-btn btn" href="del_post.php">刪除</a></div>
      </form>
      <?php if (!empty($_GET['errCode'])) { ?>
        <?php if ($_GET['errCode'] === '1') { ?>
          <div class="post-error">請完善內容再提交！</div>
        <?php } else if (($_GET['errCode'] === '2')) {?>
          <div class="post-error">請不要玩 Post ID！</div>
        <?php } ?>
      <?php } ?>
    </div>
  </div>



  <div id="navigation-container">
    <div id="navigation" class="bbs-content">
      <a class="board" href="index.php">返回看板</a>
      <div class="bar"></div>
    </div>
  </div>

  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>