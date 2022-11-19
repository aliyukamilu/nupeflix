<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';




function sendmail(){
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
      $mail->Body = " Full Name : ".$fullname." <br> ".$message." ";
      // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
  
      $mail->send();
      $released_data = array("status" => 1, "message" => "Your Message have been sent successfully!");
      exit(json_encode($released_data));
  } catch (Exception $e) {
      echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
  }
	
}