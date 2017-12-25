<?php
require_once("../util/helper.php");
import('api/Cat');
import('api/Product');
import('api/User');
import('api/Cart');

init();

function init()
{
  session_start();
  parse_uri();
}

function parse_uri()
{
  $uri = explode('?', $_SERVER['REQUEST_URI'])[0];
  $uri = trim($uri, '/');
  $arr = explode('/', $uri);
  $param = array_merge($_GET, $_POST);

  // dd($arr);

  switch($arr[0]){
    case '':
      import('view/public/home');
      break;
    case 'api':
      $klass = $arr[1];
      $method = $arr[2];
      $msg = [];

      // dd($klass,$method);  

      if ( ! has_permission_to($klass, $method))
        json_die(e('PERMISSION_DENIED'));
      $r = (new $klass)->$method($param, $msg);
      // dd($r);
      if ($r === false) {
        json_die(e($msg));
      }
      json_die(s($r));
      break;
    case 'admin':
      import('view/admin/' . $arr[1]);
      die();
      break;
    case 'user':
      import('view/public/' . $arr[1]);
      die();
      break;
    case 'logout':
      User::logout();
      redirect('/user/login');
      break;
    default:
      echo '找不到页面';
      break;
  }
}

function has_permission_to($model, $action){
  $public = [
    'user' => ['signup', 'login', 'logout','is_logged_in'],
    'product' => ['read'],
    'cat' => ['read']
  ];
  $private = [
    'product' => [
      'read' => ['user', 'admin'],
      'add'  => ['admin'],
      'remove' => ['admin'],
      'update' => ['admin'],
      'test' => ['admin'],
      'add_or_change' => ['admin']
    ],
    'cat'     => [
      'read' => ['user', 'admin', 'hr'],
      'add' => ['admin'],
      'remove' => ['admin'],
      'update' => ['admin'],
      'add_or_change' => ['admin']
    ],
    'cart' => [
      'add_cart' => ['user', 'admin'],
    ]
  ];

  if ( ! key_exists($model, $private) && ! key_exists($model, $public))
    return false;

  $public_model = @$public[$model];
  if($public_model && in_array($action, $public_model)){
    return true;
  }

  $action_arr = $private[$model];
  if ( ! $action_arr || ! key_exists($action, $action_arr))
    return false;

  $permission_arr = $action_arr[$action];

  $user_permission = @$_SESSION['user']['permission'];

  if ( ! in_array($user_permission, $permission_arr))
    return false;

  return true;
}