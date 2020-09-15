<?php
require_once("conn.php");

function corrected_site_key($site_key)
{
  switch ($site_key) {
    case 'woo':
    default:
      return 'woo';
  }
}

function send_response($is_success)
{
  global $conn;
  $json = array(
    "ok" => $is_success,
    "message" => $is_success ? "success" : $conn->error
  );
  echo json_encode($json);
  if (!$is_success) die();
}
