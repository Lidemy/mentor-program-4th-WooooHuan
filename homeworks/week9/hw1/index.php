<?php
session_start();
require_once("conn.php");
require_once("utils.php");

$username = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
}

$result = $conn->query("SELECT * FROM woo_comments ORDER BY id DESC");
if (!$result) {
  die('Error:' . $conn->error);
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>留言板</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <header class="warning">
    <strong>注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。</strong>
  </header>
  <main class="board">
    <div>
      <?php if (!$username) { ?>
        <a class="board__btn" href="register.php">註冊</a>
        <a class="board__btn" href="login.php">登入</a>
      <?php } else { ?>
        <a class="board__btn" href="logout.php">登出</a>
        <h3>你好！<?php echo $username; ?></h3>
      <?php } ?>
    </div>

    <h1 class="board__title">Comments</h1>
    <?php
    if (!empty($_GET['errCode'])) {
      $code = $_GET['errCode'];
      $msg = 'Error';
      if ($code === '1') {
        $msg = '資料不齊全';
      }
      echo '<h2 class="error">錯誤：' . $msg . '</h2>';
    }
    ?>
    <form class="board__new-comment-form" method="POST" action="handle_add_comment.php">
      <textarea name="content" rows="5"></textarea>
      <?php if ($username) { ?>
        <input class="board__submit-btn" type="submit" />
      <?php } else { ?>
        <h3>請登入發布留言</h3>
      <?php } ?>
    </form>
    <div class="board__hr"></div>
    <section>
      <?php while ($row = $result->fetch_assoc()) { ?>
      <div class="card">
        <div class="card__avatar"></div>
        <div class="card__body">
          <div class="card__info">
            <span class="card__author">
              <?php echo $row['nickname']; ?>
            </span>
            <span class="card__time">
              <?php echo $row['created_at']; ?>
            </span>
          </div>
          <p class="card__content"><?php echo $row['content']; ?></p>
        </div>
      </div>
      <?php } ?>
    </section>
  </main>
</body>

</html>