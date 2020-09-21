<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('site_key', 'nickname', 'content');
check_required_values($required, $_POST);

$sql = 'INSERT INTO woo_w12_comments(site_key, nickname, content) 
  VALUES (?, ?, ?)';
$types = 'sss';
$params = array(
  $_POST['site_key'],
  $_POST['nickname'],
  $_POST['content']
);
execute_combined_sql($sql, $types, $params);
send_response(true);
