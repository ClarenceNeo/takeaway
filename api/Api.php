<?php

import('model/Model');

class Api extends Model
{
  public function add($row)
  {
    $this
      ->safe_fill($row)
      ->save();
  }

  public function remove()
  {

  }

  public function read()
  {

  }

  public function change()
  {

  }
}