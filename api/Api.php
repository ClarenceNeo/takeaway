<?php

import('model/Model');

class Api extends Model
{
  public function add($param, &$msg)
  {
    // dd($param);
    $this->safe_fill($param);
    return $this->save($msg);
  }

  public function remove()
  {

  }

  public function read($param = [], &$msg)
  {
    return $this
      ->limit(15)
      ->order_by('id')
      ->get();
  }

  public function change()
  {

  }
}