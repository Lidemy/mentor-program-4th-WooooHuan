<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

if (empty($_GET['site_key'])) send_response(false);

$site_key = corrected_site_key($_GET['site_key']);
$sql = 'SELECT *
  FROM woo_w12_comments
  WHERE site_key = ? 
  AND is_deleted IS NULL 
  ORDER by id DESC';
$types = 's';
$params = array($site_key);
$result = execute_combined_sql($sql, $types, $params);
$data = $result->fetch_all(MYSQLI_ASSOC);

echo json_encode($data);
