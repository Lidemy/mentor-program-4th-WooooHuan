<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('id', 'site_key', 'nickname', 'content');
foreach($required as $field) {
  if (empty($_POST[$field])) send_response(false);
}
$sql = 'UPDATE woo_w12_comments SET is_deleted = 1 
  WHERE id = ? AND site_key = ? AND nickname = ? AND content = ? AND created_at = ?';

$stmt = $conn->prepare($sql);
$stmt->bind_param('issss', $_POST['id'], $_POST['site_key'], 
  $_POST['nickname'], $_POST['content'], $_POST['created_at']);

$result = $stmt->execute();
if (!$result) send_response(false);
send_response(true);
