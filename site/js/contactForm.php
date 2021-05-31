<?php

if (isset ($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['mailFrom'];
    $message = $_POST['message'];

    $mailTo = 'vistuff621@gmail.com';
    $headers = 'This is the header'.$mailFrom;
    $subject = 'Mail from Website'

    if ($mailFrom != Null) {
        mail($mailTo,$subject,$message,$headers)
    }

}