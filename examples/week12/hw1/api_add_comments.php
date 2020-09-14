<?php

require_once('conn.php');
header('Content-type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');

if (
  empty($_POST['content']) ||
  empty($_POST['nickname']) ||
  empty($_POST['site_key'])
) {
  $json = array(
    "ok" => false,
    "message" => "Please input content"
  );

  $response = json_encode($json);
  echo $response;
  die();
}

$content = $_POST['content'];
$site_key = $_POST['site_key'];
$nickname = $_POST['nickname'];

$sql = "INSERT INTO woo_w12_comments(site_key, nickname, content)
  VALUES (?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param('sss', $site_key, $nickname, $content);

$result = $stmt->execute();

if (!$result) {
  $json = array(
    "ok" => false,
    "message" => $conn->error
  );
  $response = json_encode($json);
  echo $response;
  die();
}

$json = array(
  "ok" => true,
  "message" => "success"
);

$response = json_encode($json);
echo $response;
