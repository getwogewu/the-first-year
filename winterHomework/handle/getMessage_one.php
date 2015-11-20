<?php
	include'connectDB_one.php';
	$sql = "SELECT * FROM message";
	$res = $dbh->query($sql);
	$allMessage = $res->fetchAll(PDO::FETCH_ASSOC);
?>