<?php

class Db
{
  public $tabale;
  public $database = 'takeaway';
  public $pdo;

  public $sql = '';
  public $sql_select = '';
  public $sql_where = '';
  public $sql_order_by = '';
  public $sql_limit = '';

  public $pdo_stmt;

  public function __construct($table)
  {
    $this->table = $table;
  }

  public function connect()
  {
    if ($this->pdo) return;
    $host = config('db_host');
    $this->pdo = new PDO("mysql:dbname=$this->database;host=$host",config('db_username'), config('db_password'),
      [
        /* 常用设置 */
        PDO::ATTR_CASE              => PDO::CASE_NATURAL, /*PDO::CASE_NATURAL | PDO::CASE_LOWER 小写，PDO::CASE_UPPER 大写， */
        PDO::ATTR_ERRMODE           => PDO::ERRMODE_EXCEPTION, /*是否报错，PDO::ERRMODE_SILENT 只设置错误码，PDO::ERRMODE_WARNING 警告级，如果出错提示警告并继续执行| PDO::ERRMODE_EXCEPTION 异常级，如果出错提示异常并停止执行*/
        PDO::ATTR_ORACLE_NULLS      => PDO::NULL_NATURAL, /* 空值的转换策略 */
        PDO::ATTR_STRINGIFY_FETCHES => false, /* 将数字转换为字符串 */
        PDO::ATTR_EMULATE_PREPARES  => false, /* 模拟语句准备 */
      ]);
  }

  // 生成 sql 语句

  public function where()
  {
    $args = func_get_args();

    if (!$this->sql_where) {
      $this->sql_where = 'WHERE ';
    }

    // dd($this->sql_where);

    if (count($args) == 2) {
      $this->sql_where .= "$args[0] = '$args[1]'";
    }else if(count($args) == 3){
      $this->sql_where .= "$args[0] $args[1] '$args[2]'";
    }else {
      if (is_array($args[0])) {
        // dd($args);
        foreach ($args[0] as $col => $val) {
          $this->where($col, $val);
        }
      }
    }

    $this->sql_where .= ' AND ';
    return $this;
  }

  public function order_by($by, $direction = 'desc')
  {
    $this->sql_order_by = "ORDER BY $by $direction";
    return $this;
  }

  public function limit($limit = 15, $offset = 0)
  {
    $this->sql_limit = "LIMIT $offset, $limit";
    return $this;
  }

  public function select($col_list = null)
  {
    if ( ! $col_list) {
      $this->sql_select = '*';
    } else
      foreach ($col_list as $col) {
        $this->sql_select .= "$col,";
      }

    $this->sql_select = trim($this->sql_select, ',');
    return $this;
  }

  public function find()
  {
  }


  // 增删查改

  public function insert()
  {

  }

  public function delete()
  {

  }

  public function update()
  {

  }

  public function get()
  {
    if ( ! $this->sql_select)
      $this->select();

    if ($this->sql_where) {
      $this->sql_where = trim($this->sql_where, ' AND');
    }

    dd($this->sql_where);

    $this->sql = "SELECT $this->sql_select from $this->table $this->sql_where $this->sql_order_by $this->sql_limit";
    dd($this->sql);
    $this->execute();
    return $this->get_data();
  }

  // sql 语句准备与执行

  public function prepare()
  {
    $this->pdo_stmt = $this->pdo->prepare($this->sql);
  }

  public function execute()
  {
    if (!$this->pdo_stmt)
      $this->prepare();
    
    return $this->pdo_stm->execute();
  }

  public function get_data()
  {
    return $this->pdo_stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}