<?php
	include"connectDB.php";
	$msg_content = $_POST["msg_content"];
	$msg_time = $_POST["msg_time"];
	$url = "../message_board.html";
	$sql = "INSERT INTO message (msg_content,msg_time) VALUES ('$msg_content','$msg_time')";
	$res = $dbh->prepare($sql);
	if(!empty($msg_content))
	{
  		if($dbh->exec($sql))
  		{echo "留言成功";}
	}
	else
	{
  		echo "内容不能为空白";
	}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8"/>
	<meta http-equiv="refresh" content="1;url=<?php echo $url; ?>">
</head>
</html> 