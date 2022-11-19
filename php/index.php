<?php

// declare(strict_types=1);
header('Content-type:application/json;charset=utf-8');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    include 'sort.php';
    if (isset($_GET['sendMail'])) {
        sendmail();
    } 
}elseif ($_SERVER['REQUEST_METHOD'] == 'POST'){
    include 'sort.php';
    
}