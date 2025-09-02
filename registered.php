<?php
session_start();

$_SESSION['userData'] = $_POST;

header("Location: index.php");
exit();
?>