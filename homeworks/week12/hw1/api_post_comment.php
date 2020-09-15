<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('site_key', 'nickname', 'content');
foreach($required as $field) {
  if (empty($_POST[$field])) send_response(false);
}

$sql = "INSERT INTO woo_w12_comments(site_key, nickname, content) 
  VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $_POST['site_key'], $_POST['nickname'], $_POST['content']);

$result = $stmt->execute();
if (!$result) send_response(false);
send_response(true);
