<?php
	include"connectDB_one.php";
	$msg_content = $_POST["homework_name"];
	$msg_time = $_POST["homework_password"];
	$url = "../message_board.html";
	$sql = "INSERT INTO message (msg_content,msg_time) VALUES ('$msg_content','$msg_time')";
	$res = $dbh->prepare($sql);

	if ($res->execute()) {
		$isSucceed = "Success!";
	}else{
		$isSucceed = "Failure!";
	}

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="refresh" content="1;url=<?php echo $url; ?>">
	<title></title>	
</head>
<body>
	<h1><?php echo $isSucceed ?></h1>
</body>
</html> 