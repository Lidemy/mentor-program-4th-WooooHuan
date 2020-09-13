<?php
require_once("conn.php");

function generateToken()
{
  $s = '';
  for ($i = 1; $i <= 16; $i++) {
    $s .= chr(rand(65, 90));
  }
  return $s;
}

function getUserFromUsername($username)
{
  global $conn;
  $sql = sprintf(
    "SELECT * FROM woo_users WHERE username = '%s'",
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  return $row;
}

function escape($str)
{
  return htmlspecialchars($str, ENT_QUOTES);
}

function hasPermission($user, $comment)
{
  switch ($user["role"]) {
    case "ADMIN":
      return true;
      break;
    case "NORMAL":
      return $comment["username"] === $user["username"];
    case "BANNED":
      return false;
      break;
  }
}

function isAdmin($user)
{
  return $user["role"] === "ADMIN";
}
