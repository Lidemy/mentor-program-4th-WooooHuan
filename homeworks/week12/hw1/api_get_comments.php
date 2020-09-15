<?php
require_once 'conn.php';
require_once 'utils.php';
header('Content-type:application/json;charset=utf-8');
header('Access-Control-Allow-Origin: *');

$site_key = corrected_site_key($_GET['site_key']);
$sql = 'SELECT nickname, content, created_at
  FROM woo_w12_comments
  WHERE site_key = \'' . $site_key . '\'
  ORDER by id DESC';

$result = $conn->query($sql);
if (!$result) send_response(false);

$data = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($data);
