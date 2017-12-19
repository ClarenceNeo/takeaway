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
  return dirname(__FILE__) . '/../' . $path . '.' . $ext;
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

