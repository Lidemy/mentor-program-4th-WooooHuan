<?php
require_once("conn.php");

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

function escape($str)
{
  return htmlspecialchars($str, ENT_QUOTES);
}
