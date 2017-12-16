<?php
require_once("../util/helper.php");
import('db/Db');

$db = new Db('user');
$db->connect();

// $data = $db
//   ->like('username', 'whh')
//   ->or_like('password', 200)
//   // ->where([
//   //  'a'        => 1,
//   //  'username' => 'whh',
//   // ])
//   ->limit(10)
//   ->select(['id', 'username', 'a', 'b'])
//   ->order_by('id', 'desc')
//   ->get();

// $r = $db
//     ->insert([
//       'username' => 'lsd',
//       'password' => '123'
//     ]);

// $r = $db
//     ->where('id', 2)
//     ->update([
//       'username' => 'udd',
//       'password' => '333'
//     ]);

  $r = $db
    ->where('id', 2)
    ->delete();

var_dump($r);