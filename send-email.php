<?php
error_reporting(E_ALL);
ini_set('display_errors', 'On');
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // フォームから送信されたデータを取得
    $companyName = $_POST["companyName"];
    $name = $_POST["name"];
    $phoneNumber = $_POST["phoneNumber"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // 送信先メールアドレス
    $to = "teraken021216@gmail.com"; // ここに送信先のメールアドレスを入力してください

    // メールの件名
    $subject = "お問い合わせがありました";

    // メールの本文
    $emailBody = "会社名: " . $companyName . "\n";
    $emailBody .= "氏名: " . $name . "\n";
    $emailBody .= "電話番号: " . $phoneNumber . "\n";
    $emailBody .= "メールアドレス: " . $email . "\n";
    $emailBody .= "お問い合わせ内容: " . $message . "\n";

    // メールを送信
    if (mail($to, $subject, $emailBody)) {
        echo "送信が完了しました";
    } else {
        echo "メールの送信に失敗しました";
    }
}
?>
