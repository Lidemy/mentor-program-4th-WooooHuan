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
      <a id="logo" href="index.php">Lidemy實業坊</a>
      <span>›</span>
      <a class="board" href="index.php"><span class="board-label">看板 </span>Woo's_Board</a>
      <a class="right small" href="login.php">管理員登入</a>
    </div>
  </div>

  <div id="navigation-container">
    <div id="navigation" class="bbs-content">
      <a class="board" href="index.php">返回看板</a>
      <div class="bar"></div>
    </div>
  </div>

  <div id="main-container">
    <div id="main-content" class="bbs-screen bbs-content"><div class="article-metaline"><span class="article-meta-tag">作者</span><span class="article-meta-value">填入作者與暱稱</span></div><div class="article-metaline-right"><span class="article-meta-tag">看板</span><span class="article-meta-value">Woo's_Board</span></div><div class="article-metaline"><span class="article-meta-tag">標題</span><span class="article-meta-value">填入分類與標題</span></div><div class="article-metaline"><span class="article-meta-tag">時間</span><span class="article-meta-value">想辦法顯示出時間</span></div>

填入內容

如題

之前吃屎哥要出大招時被館長斷招

--<span class="f2">
※ 發信站: Lidemy實業坊(Lidemy.cc)</span></div><div id="article-polling">推文自動更新已關閉，也沒辦法推文哦～</div>
  </div>
  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>