<?php

import('api/Api');

class User extends Api
{
  public $table = 'User';
  public $rule = ['username' => 'max_length:24|min_length:3|unique:username'];
}