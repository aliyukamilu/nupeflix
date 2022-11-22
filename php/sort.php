<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';




function sendmail()
{
  $fullname = $_GET['fullname'];
  $email = $_GET['email'];
  $subject = $_GET['subject'];
  $message = $_GET['message'];



  $mail = new PHPMailer(true);

  try {
    //Server settings
    //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'tekmatedynamic.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'enquiries@tekmatedynamic.com';                     //SMTP username
    $mail->Password   = '3nqu1r13s@22';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom($email);
    $mail->addAddress('enquiries@tekmatedynamic.com');     //Add a recipient
    // $mail->addAddress('ellen@example.com');               //Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');

    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = "$subject";
    //   $mail->Body    = ($bodyB);
    $mail->Body = " Full Name : " . $fullname . " <br> " . $message . " ";
    // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    $released_data = array("status" => 1, "message" => "Your Message have been sent successfully!");
    exit(json_encode($released_data));
  } catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
}

function login($username, $password)
{
  include "includes/index.php";
  $query_User_re = sprintf("SELECT * FROM users WHERE email='{$username}'");
  $User_re = mysqli_query($nupeflix, $query_User_re) or die(mysqli_error($nupeflix));
  $row_User_re = mysqli_fetch_assoc($User_re);
  $totalRows_User_re = mysqli_num_rows($User_re);
  if ($totalRows_User_re > 0) {
    if ($row_User_re['password'] == $password) {
      $arr = ['status' => 1, 'message' => 'Logging you in 😎', 'userId' => $row_User_re['id'], 'hash_id' => $row_User_re['hash_id'], 'account_type' => $row_User_re['account_type']];
      exit(json_encode($arr));
    }
  }
}

function createUser($all)
{
  include "includes/index.php";
  $email = $all['email'];
  $password = $all['password'];
  $account_type = $all['account_type'];
  $hash_id = uniqid();

  $query_User_re = sprintf("INSERT INTO `users`(`email`, `password`, `account_type`, `hash_id`) 
            VALUES ('$email','$password','$account_type','$hash_id')");
  $User_re = mysqli_query($nupeflix, $query_User_re) or die(mysqli_error($nupeflix));
  if ($User_re) {
    $returnResponse = ['status' => 1, 'message' => "account created successfully"];
    exit(json_encode($returnResponse));
  } else {
    $returnResponse = ['status' => 0, 'message' => "account not created, try again"];
    exit(json_encode($returnResponse));
  }
}

function allMovies()
{
  include "includes/index.php";
  $query_User_re = sprintf("SELECT * FROM movies");
  $User_re = mysqli_query($nupeflix, $query_User_re) or die(mysqli_error($nupeflix));
  $row_User_re = mysqli_fetch_assoc($User_re);
  $totalRows_User_re = mysqli_num_rows($User_re);
  $getResponse = [];
  if ($totalRows_User_re > 0) {
    do {
      $getResponse[] = $row_User_re;
  } while ($row_User_re = mysqli_fetch_assoc($User_re));
  exit(json_encode($getResponse));
  }
}

function specificMovie()
{
  include "includes/index.php";
  $id = $_GET['id'];
  $query_User_re = sprintf("SELECT * FROM movies WHERE movie_id = $id");
  $User_re = mysqli_query($nupeflix, $query_User_re) or die(mysqli_error($nupeflix));
  $row_User_re = mysqli_fetch_assoc($User_re);
  $totalRows_User_re = mysqli_num_rows($User_re);
 if ($totalRows_User_re > 0) {
    $getResponse[] = $row_User_re;
    exit(json_encode($getResponse));
  }
}

?>
