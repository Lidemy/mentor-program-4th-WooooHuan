<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/data;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('user', 'json');
check_required_values($required, $_POST);

$sql = 'SELECT * FROM woo_w12_todolist WHERE user = ?';
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $_POST['user']);
$stmt->execute();
$result = $stmt->get_result()->fetch_all();

$sql = $result ?
  'UPDATE woo_w12_todolist SET json = ? WHERE user = ?':
  'INSERT INTO woo_w12_todolist(json, user) VALUES (?, ?)';
$types = 'ss';
$params = array($_POST['json'], $_POST['user']);
execute_combined_sql($sql, $types, $params);
send_response(true);
