<?php
session_start();
require_once("conn.php");
require_once("utils.php");

$username = NULL;
$user = NULL;
if (!empty($_SESSION['username'])) {
  $username = $_SESSION['username'];
  $user = getUserFromUsername($username);
}

$sql = 'SELECT ' .
  'C.id AS id, C.content AS content, ' .
  'C.created_at AS created_at, U.nickname AS nickname, U.username AS username ' .
  'FROM woo_comments AS C ' . 
  'LEFT JOIN woo_users AS U ON C.username = U.username ' .
  'WHERE C.is_deleted IS NULL ' . 
  'ORDER BY C.id DESC';

 /*  'select '.
      'C.id as id, C.content as content, '.
      'C.created_at as created_at, U.nickname as nickname, U.username as username '.
    'from comments as C ' .
    'left join users as U on C.username = U.username '.
    'where C.is_deleted IS NULL '.
    'order by C.id desc'*/

$stmt = $conn->prepare($sql);
$result = $stmt->execute();
if (!$result) {
  die('Error:' . $conn->error);
}
$result = $stmt->get_result();
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
        <span class="board__btn update-nickname">編輯暱稱</span>
        <form class="hide board__nickname-form board__new-comment-form" method="POST" action="update_user.php">
          <div class="board__nickname">
            <span>新的暱稱：</span>
            <input type="text" name="nickname" />
          </div>
          <input class="board__submit-btn" type="submit" />
        </form>
        <h3>你好！<?php echo $user['nickname']; ?></h3>
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
      <?php
      while ($row = $result->fetch_assoc()) {
      ?>
        <div class="card">
          <div class="card__avatar"></div>
          <div class="card__body">
            <div class="card__info">
              <span class="card__author">
                <?php echo escape($row['nickname']); ?>
                (@<?php echo escape($row['username']); ?>)
              </span>
              <span class="card__time">
                <?php echo escape($row['created_at']); ?>
              </span>
              <?php if ($row['username'] === $username) { ?>
                <a href="update_comment.php?id=<?php echo $row['id'] ?>">編輯</a>
                <a href="delete_comment.php?id=<?php echo $row['id'] ?>">刪除</a>
              <?php } ?>
            </div>
            <p class="card__content"><?php echo escape($row['content']); ?></p>
          </div>
        </div>
      <?php } ?>

    </section>

  </main>
  <script>
    var btn = document.querySelector('.update-nickname')
    btn.addEventListener('click', function() {
      var form = document.querySelector('.board__nickname-form')
      form.classList.toggle('hide')
    })
  </script>
</body>

</html>