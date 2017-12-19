<?php

import('api/Api');

class User extends Api
{
  public $table = 'User';
  public $rule = [
    'username' => 'max_length:24|min_length:3|unique:username',
    'password' => 'max_length:64|min_length:6'
  ];

  public function login($param, &$msg)
  {
    if ( ! ($username = @$param['username']) || ! ($password = @$param['password'])) {
      $msg = 'required:username&&password';
      return false;
    }

    $user = $this
      ->where('username', $username)
      ->where('password', self::hash_password($password))
      ->first();
    if ( ! $user) {
      $msg = 'invalid:username||password';
      return false;
    }

    unset($user['password']);
    $_SESSION['user'] = $user;

    return true;
  }

  public function signup($param, &$msg)
  {
    if (!($username = @$param['username']) || !($password = @$param['password'])) {
      $msg = 'require:username&&password';
      return false;
    }

    return $this->add($param, $msg);
  }

  public function before_save()
  {
    if (!$password = &$this->filled['password']) {
      return;
    }
    $password = self::hash_password($password);
  }

  public static function hash_password($password)
  {
    return md5(md5($password) . '6rysjhhrhl');
  }

  public static function logout(){
    unset($_SESSION['user']);
    return true;
  }
}