<?php
session_start();
require_once('conn.php');

if (
  empty($_POST['title']) ||
  empty($_POST['content'])
) {
  header('Location: edit_post.php?errCode=1');
  die();
}

$post_id = $_SESSION['post_id'];
$title = $_POST['title'];
$content = $_POST['content'];
$sql = "UPDATE woo_blog_posts SET title=?, content=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('ssi', $title, $content, $_SESSION['post_id']);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}

header("Location: post.php?id=".$_SESSION['post_id']);
