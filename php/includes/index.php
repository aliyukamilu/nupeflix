<?php
    $hostname_nupeflix = "localhost";
    $database_nupeflix = "nupeflix";
    $username_nupeflix = "root";
    $password_nupeflix = "";
    $nupeflix = mysqli_connect($hostname_nupeflix, $username_nupeflix, $password_nupeflix, $database_nupeflix) or trigger_error(mysqli_error($allonnupeflix),E_USER_ERROR);
?>