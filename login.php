<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Formdan gelen verileri güvenli hale getirin
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Kullanıcı adı ve şifre doğrulaması
    if ($username === 'B231210034@sakarya.edu.tr' && $password === 'B231210034') {
        // Başarılı giriş
        header("Location: hosgeldiniz.html");
        exit;
    } else {
        // Başarısız giriş
        header("Location: hata.html");
        exit;
    }
}
?>