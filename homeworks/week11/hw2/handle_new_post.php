<?php
session_start();
require_once('conn.php');

if (
  empty($_POST['title']) ||
  empty($_POST['content'])
) {
  header('Location: add_post.php?errCode=1');
  die();
}

$account = $_SESSION['account'];
$title = $_POST['title'];
$content = $_POST['content'];

$sql = "INSERT INTO woo_blog_posts(account, title, content)
  VALUES(?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $account, $title, $content);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}

header("Location: index.php");
