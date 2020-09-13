<?php
session_start();
require_once("conn.php");
require_once("utils.php");

$search_title = '%' . $_POST['search'] . '%';
$sql = 'SELECT * ' .
  'FROM woo_blog_posts AS posts ' .
  'WHERE posts.title LIKE ? AND posts.is_deleted IS NULL ' .
  'ORDER BY posts.id DESC ' . 
  'LIMIT 100 OFFSET 0 ';

$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $search_title);
$result = $stmt->execute();
if (!$result) {
  die('Error:' . $conn->error);
}
$result = $stmt->get_result();
?>
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>看板 Woo's Board 文章列表 - Lidemy實業坊 </title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="./css/bbs-common.css">
  <link rel="stylesheet" type="text/css" href="./css/bbs-base.css" media="screen">
  <link rel="stylesheet" type="text/css" href="./css/bbs-custom.css">
  <link rel="stylesheet" type="text/css" href="./css/pushstream.css" media="screen">
  <link rel="stylesheet" type="text/css" href="./css/bbs-print.css" media="print">
  <link rel="stylesheet" type="text/css" href="./css/others.css">
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

  <div id="action-bar-container">
    <div class="action-bar">
      <div class="btn-group btn-group-dir">
        <a class="btn selected" href="index.php">看板</a>
        <span class="btn" href="index.php"><s>精華區</s></span>
      </div>
    </div>
  </div>

  <div id="navigation-container">
    <div id="navigation" class="bbs-content">
      <a class="board" href="add_post.php">新增文章</a>
      <div class="bar"></div>
    </div>
  </div>

  <div class="r-list-container action-bar-margin bbs-screen">
    <div class="search-bar">
      <form id="search-bar" method="POST" action="search_result.php">
        <input class="query" type="text" name="search" value="" placeholder="搜尋功能維修中⋯">
      </form>
    </div>

    <section>
      <?php while ($row = $result->fetch_assoc()) { ?>
        <div class="r-ent">
          <div class="nrec"><span class="hl f2"></span></div>
          <div class="title">
            <?php if (!$row['is_deleted']) { ?>
              <a href="post.php?id=<?php echo $row['id'] ?>">
                <?php echo escape($row['title']); ?>
              </a>
            <?php } else { ?>
              <span class="deleted">(本文已被刪除) [woo]</span>
            <?php } ?>
          </div>
          <div class="meta">
            <div class="author">
              <?php echo escape($row['account']); ?>
            </div>
            <div class="article-menu">
              <?php if ($account && !$row['is_deleted']) { ?>
                <a href="edit_post.php?id=<?php echo $row['id'] ?>" class="trigger">⋯</a>
              <?php } ?>
            </div>
            <div class="date">
              <?php echo escape(date('m/d', strtotime($row['created_at']))); ?>
            </div>
            <div class="mark"></div>
          </div>
        </div>
      <?php } ?>
    </section>

  </div>

  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>