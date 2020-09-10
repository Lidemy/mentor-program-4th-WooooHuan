<?php
  session_start();
  require_once('conn.php');

  if (
    empty($_POST['account']) ||
    empty($_POST['password']) 
  ) {
    header('Location: login.php?errCode=1');
    die();
  }

  $account = $_POST['account'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM woo_blog_admin WHERE account=?";
  $stmt = $conn->prepare($sql);
  $stmt->bind_param("s", $account);
  $result = $stmt->execute();
  if (!$result) {
    die($conn->error);
  }

  $result = $stmt->get_result();
  if ($result->num_rows === 0) {
    header("Location: login.php?errCode=1");
    exit();
  }

  $row = $result->fetch_assoc();
  if (password_verify($password, $row['password'])) {
    $_SESSION['account'] = $account;
    header("Location: index.php");
  } else {
    header("Location: login.php?errCode=1");
  }
