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
$admin_info = getInfoFromAccount($row['account']);
$author = escape($admin_info['account']) . 
  ' (' . escape($admin_info['nickname']) . ')';

?>
<!DOCTYPE html>

<html>

<head>
  <meta charset="utf-8">
  <title>看板 Woo's Board - Lidemy實業坊 </title>
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
      <?php
      echo $account ? '<a class="right small" href="logout.php">管理員登出</a>' : '<a class="right small" href="login.php">管理員登入</a>';
      ?>
    </div>
  </div>

  <div id="navigation-container">
    <div id="navigation" class="bbs-content">
      <a class="board" href="index.php">返回看板</a>
      <div class="bar"></div>
    </div>
  </div>

  <div id="main-container">
    <div id="main-content" class="bbs-screen bbs-content"><div class="article-metaline"><span class="article-meta-tag">作者</span><span class="article-meta-value"><?php echo $author; ?></span></div><div class="article-metaline-right"><span class="article-meta-tag">看板</span><span class="article-meta-value">Woo's_Board</span></div><div class="article-metaline"><span class="article-meta-tag">標題</span><span class="article-meta-value"><?php echo escape($row['title']); ?></span></div><div class="article-metaline"><span class="article-meta-tag">時間</span><span class="article-meta-value"><?php echo escape(date('D M d G:i:s o', strtotime($row['created_at']))); ?></span></div>
<?php
echo $row['content'] . '<br>';
?>
<br>--<span class="f2">
※ 發信站: Lidemy實業坊(Lidemy.cc)</span></div><div id="article-polling">推文自動更新已關閉，也沒辦法推文哦～</div>
  </div>
  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>