<?php

function e($msg, $code = 403)
{
  if ($msg == 'db_internal_error') {
    $code = 500;
  }

  http_response_code($code);

  return ['success'=>false, 'msg' => $msg];
}

function s($data = null, $code = 200)
{
  http_response_code($code);
  return ['success' => true, 'data' => $data];
}

function import($path)
{
  require_once(root($path));
}

function root($path, $ext = 'php')
{
  return dirname(__FILE__) . '/../' . $path . ($ext ? '.' . $ext : '');
}

function config($key)
{
  if (!$config = @$GLOBALS['__config']) {
    $json = file_get_contents(root('.config', 'json'));
    $config = json_decode($json, true);
    $GLOBALS['__config'] = $config;
  }

  return @$config[$key];
}

function json($data)
{
  header('Content-Type: application/json');
  return json_encode($data);
}

function dd()
{
  foreach (func_get_args() as $key) {
    var_dump($key);
  }
  die();
}

function json_die($data) {
  echo json($data);
  die();
}

function logged_in()
{
  return (bool) @$_SESSION['user']['id'];
}

function his($key)
{
  if (!logged_in()) {
    return null;
  }

  return @$_SESSION['user'][$key];
}

function redirect($url){
  header("Location: $url");
}

function move_uploaded($key, &$data = null)
{
  $file_type = [
    'image/jpeg' => 'jpg',
    'image/png'  => 'png',
  ];

  $file = @$_FILES[$key];

  

  if ( !$tmp = $file['tmp_name'])
    return false;
  // dd($file);
  $old_name = $file['name'];
  $file_name = uniqid() . '.' . rand(100, 999);
  $mime = $file['type'];
  $ext = $file_type[$mime];

  $dest = root('public/upload', '') . "/$file_name.$ext";
  if ($r = move_uploaded_file($tmp, $dest))
    $data = [
      'name'     => $file_name,
      'ext'      => $ext,
      'fullname' => "$file_name.$ext",
      'mime'     => $mime,
      'size'     => $file['size'],
      'old_name' => $old_name,
    ];

  return $r;
}

function he_is($permission)
{
  return @$_SESSION['user']['permission'] === $permission;
}