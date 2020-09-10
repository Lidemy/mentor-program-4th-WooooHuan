<?php
session_start();
require_once("conn.php");
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
  <link rel="stylesheet" type="text/css" href="./css/login.css">
</head>

<body>
  <div id="topbar-container">
    <div id="topbar" class="bbs-content">
      <a id="logo" href="index.php">Lidemy實業坊</a>
      <span>›</span>
      <a class="board" href="index.php"><span class="board-label">看板 </span>Woo's_Board</a>
    </div>
  </div>
  <form class="login-form" method="POST" action="handle_login.php">
    <div class="form-container">
      <div class="login-account">
        <span>管理員帳號：</span>
        <input type="text" class="login-input" name="account" />
      </div>
      <div class="login-password">
        <span>密碼：</span>
        <input type="password" class="login-input" name="password" />
      </div>
      <input class="login-btn btn" type="submit" />
      <?php if (!empty($_GET['errCode']) && $_GET['errCode'] === '1') { ?>
        <div class="login-error">無效的帳戶資訊！</div>
      <?php } ?>
    </div>
  </form>

  </div>
  <div class="bbs-screen bbs-footer-message"></div>
</body>

</html>