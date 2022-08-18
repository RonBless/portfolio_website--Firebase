<?php

if(isset($_POST['sumbit'])){
	
	$name = $_POST['name'];
	$email = $_POST['email']; 
	$subject = $_POST['subject']; 
	$message = $_POST['tmm']; 

	$reciver = "ron14@ronberaha.site";
	$headers = "From: ".$email;
	$txt = "Message from your website: \n".$message;

	mail($reciver, $subject, $txt, $headers);
	header("Location: index.php?mailsend");

}
?>