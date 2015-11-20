<?php
	include"connectDB.php";
	$homework_name = $_POST["homework_name"];
	$homework_password = $_POST["homework_password"];
	$url = "../blog.html";
	$sql = "INSERT INTO information_reg (homework_name,homework_password) VALUES ('$homework_name','$homework_password')";
	$res = $dbh->prepare($sql);
	if(!empty($homework_name)  &&  !empty($homework_password))
	{
  		if($dbh->exec($sql))
  		{
  			echo "注册成功";
  		}
	}
	else
	{
  		echo "你输入的信息不完整";
	}
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="refresh" content="1;url=<?php echo $url; ?>">
</head>
</html> 