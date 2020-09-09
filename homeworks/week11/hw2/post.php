<?php
session_start();
require_once("conn.php");

$post_id = 1;
if (!empty($_GET['post_id'])) {
  $post_id = intval($_GET['post_id']);
}

$sql = 'SELECT * ' .
  'FROM woo_blog_posts AS posts ' .
  'WHERE posts.id = ?';

$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $post_id);
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
      <a class="right small" href="">個板管理員登入</a>
    </div>
  </div>

  </div>

  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>