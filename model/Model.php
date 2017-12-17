<?php
import('db/Db');

class Model extends Db
{
  public $filled = [];

  public function __construct()
  {
    parent::__construct($this->table);
    $this->connect();
  }

  public function fill($row)
  {
    $this->filled = $row;
  }

  public function safe_fill($row)
  {
    $filtered = [];

    foreach ($this->all_column_name() as $col) {
      $val = @$row[$col];
      if (! $val) 
        continue;
      $filtered[$col] = $val;
    }

    $this->fill($filtered);
    return $this;
  }

  public function save(&$msg = [])
  {
    $filled = $this->filled;
    $is_update = (bool) $id = @$filled['id'];

    if ($is_update) {
      $this->where('id', $id);

      if (! $this->get()) {
        $msg[id] = 'not_exist';
        return false;
      }
      // dd($filled);
      $this->where('id', $filled['id']);
      return $this->update($filled);
    } else {
      if ($this->insert($filled)) {
        return $this->last_id();
      }
      return false;
    }
  }

  public function add($row)
  {
    $this
      ->safe_fill($row)
      ->save();
  }

  public function change($row)
  {
    return $this->add($row);
  }

}
