<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('id', 'site_key', 'nickname', 'content');
check_required_values($required, $_POST);

$sql = 'UPDATE woo_w12_comments SET is_deleted = 1 
  WHERE id = ? AND site_key = ? AND nickname = ? AND content = ? AND created_at = ?';
$types = 'issss';
$params = array(
  $_POST['id'], 
  $_POST['site_key'], 
  $_POST['nickname'],
  $_POST['content'],
  $_POST['created_at']
);
execute_combined_sql($sql, $types, $params);
send_response(true);
