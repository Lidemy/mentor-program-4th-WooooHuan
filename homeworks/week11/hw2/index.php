<?php
session_start();
require_once("conn.php");

$page = 1;
if (!empty($_GET['page'])) {
  $page = intval($_GET['page']);
}
$posts_per_page = 5;
$offset = ($page - 1) * $posts_per_page;

$sql = 'SELECT * ' .
  'FROM woo_blog_posts AS posts ' .
  'WHERE posts.is_deleted IS NULL ' .
  'ORDER BY posts.id DESC ' .
  'LIMIT ? OFFSET ?';
  
$stmt = $conn->prepare($sql);
$stmt->bind_param('ii', $posts_per_page, $offset);
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
</head>

<body>
  <div id="topbar-container">
    <div id="topbar" class="bbs-content">
      <a id="logo" href="">Lidemy實業坊</a>
      <span>›</span>
      <a class="board" href=""><span class="board-label">看板 </span>Woo's_Board</a>
      <a class="right small" href="">管理員登入</a>
    </div>
  </div>

  <div id="action-bar-container">
    <div class="action-bar">
      <div class="btn-group btn-group-dir">
        <a class="btn selected" href="">看板</a>
        <a class="btn" href="">精華區</a>
      </div>
      <div class="btn-group btn-group-paging">
        <a class="btn wide" href="">最舊</a>
        <a class="btn wide" href="">‹ 上頁</a>
        <a class="btn wide disabled">下頁 ›</a>
        <a class="btn wide" href="">最新</a>
      </div>
    </div>
  </div>

  <div class="r-list-container action-bar-margin bbs-screen">
    <div class="search-bar">
      <form type="get" action="https://www.ptt.cc/bbs/Gossiping/search" id="search-bar">
        <input class="query" type="text" name="q" value="" placeholder="搜尋功能維修中⋯">
      </form>
    </div>

    <section>
      <?php while ($row = $result->fetch_assoc()) { ?>
        <div class="r-ent">
          <div class="nrec"><span class="hl f2"></span></div>
          <div class="title">
            <a href="">
              <?php echo $row['title']; ?>
            </a>
          </div>
          <div class="meta">
            <div class="author">
              <?php echo $row['account']; ?>
            </div>
            <div class="article-menu">
              <div class="trigger">⋯</div>
            </div>
            <div class="date">
              <?php echo $row['created_at']; ?>
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