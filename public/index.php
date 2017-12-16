<?php
require_once("../util/helper.php");
import('db/Db');

$db = new Db('user');
$db->connect();

$data = $db
  ->where('username', 'whh')
  ->where('password', '<', 200)// balance > 10
  ->where([
   'a'        => 1,
   'username' => 'whh',
  ])
  ->limit(10)
  ->select(['id', 'username', 'a', 'b'])
  ->order_by('id', 'desc')
  ->get();
