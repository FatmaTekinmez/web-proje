<?php
 if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username === 'B231210034@sakarya.edu.tr' && $password === 'B231210034') {

    header("Location: hosgeldiniz.html");
    exit;
  } else {

    header("Location: hata.html");
    exit;
  }
}
?>