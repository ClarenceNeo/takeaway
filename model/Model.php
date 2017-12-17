<?php
import('db/Db');

class Model extends Db
{
  public $table;

  public function __construct()
  {
    parrent::__construct($this->table);
    $this->connect();
  }

}
