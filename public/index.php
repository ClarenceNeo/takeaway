<?php
require_once("../util/helper.php");
import('api/Cat');
import('api/Product');
import('api/User');

init();

function init()
{
  parse_uri();
}

function parse_uri()
{
  $uri = explode('?', $_SERVER['REQUEST_URI'])[0];
  $uri = trim($uri, '/');
  $arr = explode('/', $uri);
  $param = array_merge($_GET, $_POST);

  dd($arr);

  switch($arr[0]){
    case 'api':
      $klass = $arr[1];
      $method = $arr[2];
      $msg = [];
      $r = (new $klass)->$method($param, $msg);
      if ($r === false) {
        echo json(e($msg));
        die();
      }
      echo json(s($r));
      die();
      break;
    case 'admin':
      import('view/admin/' . $arr[1]);
      die();
      break;
    default:
      break;
  }
}



// $cat = new Cat();

// $product = new Product();

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