<?php
require_once("conn.php");

$account = NULL;
$acc_info = NULL;
if (!empty($_SESSION['account'])) {
  $account = $_SESSION['account'];
  $acc_info = getInfoFromAccount($account);
}

function getInfoFromAccount($account)
{
  global $conn;
  $sql = sprintf(
    "SELECT * FROM woo_blog_admin WHERE account='%s'",
    $account
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  return $row;
}

function getResultFromStmt($stmt)
{
  global $conn;
  $result = $stmt->execute();
  if (!$result) die('Error:' . $conn->error);
  $result = $stmt->get_result();
  return $result;
}

function escape($str)
{
  return htmlspecialchars($str, ENT_QUOTES);
}


