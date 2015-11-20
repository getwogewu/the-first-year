<?php
	include'connectDB.php';
	$sql = "SELECT * FROM information_login";
	$res = $dbh->query($sql);
	$allMessage = $res->fetchAll(PDO::FETCH_ASSOC);
?>