<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/data;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$required = array('user');
check_required_values($required, $_POST);

$sql = 'SELECT * FROM woo_w12_todolist WHERE user = ?';
$types = 's';
$params = array($_POST['user']);
$result = execute_combined_sql($sql, $types, $params);

$data = '[]';
if ($result->num_rows > 0) {
  $data = $result->fetch_assoc()['json'];
}

echo $data;
