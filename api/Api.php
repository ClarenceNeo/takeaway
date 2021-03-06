<?php

import('model/Model');

class Api extends Model
{
  public function add_or_change($param, &$msg)
  {
    // dd($param);
    $this->safe_fill($param);
    return $this->save($msg);
  }

  public function remove($param, &$msg)
  {

    if (!$id = @$param['id']) {
      $msg = 'required: id';
      return false;
    }

    // dd($id);

    return $this->where('id', $id)->delete();
  }

  public function read($param = [], &$msg)
  {
    $page = @$param['page'] ?: 1;
    return $this
      ->page($page)
      ->order_by('id')
      ->get();
  }
}