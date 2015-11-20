<?php
	include'connectDB.php';
	$sql = "SELECT * FROM information_reg";
	$res = $dbh->query($sql);
	$allMessage = $res->fetchAll(PDO::FETCH_ASSOC);
?>