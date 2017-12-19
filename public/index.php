<?php
require_once("../util/helper.php");
import('api/Cat');
import('api/Product');

$cat = new Cat();

$product = new Product();

// $r = $cat->safe_fill(['title' => 'a'])
//             ->save($msg);
// dd($r, $msg);

// $r = $product->safe_fill(['title' => '12234', 'price' => 3233])
//             ->save($msg);
// dd($r, $msg);

// $cat ->change(['title'=>'b','id'=>2]);
// $r = $cat->add(['title'=>'c']);

// dd($r);
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
//     ->where('id', 13)
//     ->update([
//       'username' => 'hhh',
//       'password' => '555'
//     ]);

// $r = $db
//     ->where('id', 23)
//     ->delete();

// $r = $db
//     ->get();
// $r = $db
//   ->where('id', 2)
//   ->delete();

// var_dump($r);