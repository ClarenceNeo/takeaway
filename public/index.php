<?php
require_once("../util/helper.php");
import('db/Db');

$db = new Db('user');
$db->connect();