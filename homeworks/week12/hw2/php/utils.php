<?php
require_once("conn.php");

function check_required_values($required, $values)
{
  foreach ($required as $val) {
    if (empty($values[$val])) send_response(false);
  }
}

function send_response($is_success)
{
  global $conn;
  $json = array(
    'ok' => $is_success,
    'message' => $is_success ? 'success' : $conn->error
  );
  echo json_encode($json);
  if (!$is_success) die();
}

function execute_combined_sql($sql, $types, $params)
{
  global $conn;
  $stmt = $conn->prepare($sql);
  $stmt->bind_param($types, ...$params);
  $result = $stmt->execute();

  if (!$result) {
    send_response($result);
    return $result;
  }
  return $stmt->get_result();
}
