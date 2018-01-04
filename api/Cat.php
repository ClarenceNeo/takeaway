<?php

import('api/Api');

class Cat extends Api
{
  public $table = 'cat';
  public $rule = ['title' => 'max_length:24|min_length:3|unique:title'];

  public function add($param, &$msg){
    $this->add_or_change($param, $msg);
  }

  public function read($param = [], &$msg)
  {
    // $page = @$param['page'] ?: 1;
    return $this
      // ->page($page)
      ->order_by('id','asc')
      ->get();
  }
}