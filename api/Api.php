<?php

import('model/Model');

class Api extends Model
{
  public function add($param, &$msg)
  {
    $this->safe_fill($param);
    return $this->save($msg);
  }

  public function remove()
  {

  }

  public function read($param = [], &$msg)
  {
    $this
      ->limit(15)
      ->order_by('id')
      ->get();
    return $this->get_date();
  }

  public function change()
  {

  }
}