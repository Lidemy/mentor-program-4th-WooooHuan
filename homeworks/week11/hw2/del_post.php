<?php
session_start();
require_once('conn.php');

$post_id = $_SESSION['post_id'];
$sql = "UPDATE woo_blog_posts SET is_deleted = 1 WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('i', $_SESSION['post_id']);
$result = $stmt->execute();
if (!$result) {
  die($conn->error);
}

header("Location: index.php");
