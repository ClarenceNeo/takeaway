<?php

class Db
{
  public $tabale;
  public $database = 'takeaway';
  public $pdo;

  public $sql = '';
  public $sql_select = '';

  public $sql_where = '';
  public $where_relation = 'AND';
  public $where_count = 0;

  public $sql_column = '';
  public $sql_value = '';

  public $sql_update = '';

  public $sql_order_by = '';
  public $sql_limit = '';

  public $sql_join = '';

  public $pdo_stmt;

  public function __construct($table)
  {
    $this->table = $table;
    $this->connect();
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

    // dd(func_get_args());
    $this->where_relation = 'AND';
    return call_user_func_array([$this, 'make_where'], func_get_args());
  }

  public function or_where()
  {
    $this->where_relation = 'OR';
    return call_user_func_array([$this, 'make_where'], func_get_args());
  }

  public function make_where()
  {
    $args = func_get_args();

    // dd($args);

    if (!$this->sql_where) {
      $this->sql_where = 'WHERE ';
    }

    if (count($args) == 2) {
      $this->sql_where .= $this->make_where_condition($args[0], "=", $args[1]);
    }else if(count($args) == 3){
      $this->sql_where .= $this->make_where_condition($args[0], $args[1], $args[2]);
    }else {
      if (is_array($args[0])) {
        // dd($args);
        foreach ($args[0] as $col => $val) {
          $this->make_where_condition($col, "=", $val);
        }
      }
    }
    return $this;
  }

  public function make_where_condition($col, $operator, $val)
  {
    if ($this->where_count)
      $this->sql_where .= " $this->where_relation ";
    $this->sql_where .= "$col $operator '$val'";
    $this->where_count++;
  }

  public function like($col, $keyword)
  {
    return $this->where($col, 'like', "%$keyword%");
  }

  public function or_like($col, $keyword)
  {
    return $this->or_where($col, 'like', "%$keyword%");
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

  public function join()
  {
    $args = func_get_args();
    // dd($args);
    foreach ($args[0] as $col) {
      $this->sql_join .= ' left join ' . $col . ' on ' . $this->table . '.' . $col . '_id' . ' = ' . $col . '.id';
    }
    // dd($this->sql_join);
    return $this;
  }

  public function find()
  {
  }


  // 增删查改

  public function insert($row)
  {
    foreach($row as $col => $val){
      $this->sql_column .= "$col,";
      $this->sql_value .= "'$val',";
    }

    $this->sql_column = trim($this->sql_column, ',');
    $this->sql_value = trim($this->sql_value, ',');

    $this->sql = "insert into $this->table ($this->sql_column) values ($this->sql_value)";
    $r = $this->execute();
    $this->init_sql();
    return $r;
  }

  public function delete()
  {
    $this->sql = "DELETE FROM $this->table $this->sql_where";
    $r = $this->execute();
    $this->init_sql();
    return $r;
  }

  public function update($row)
  {
    unset($row['id']);
    foreach($row as $col => $val){
      $this->sql_update .= "$col = '$val',";
    }
    $this->sql_update = trim($this->sql_update, ',');
    $this->sql = "UPDATE $this->table SET $this->sql_update $this->sql_where";
    // dd($this->sql);
    $r = $this->execute();
    $this->init_sql();
    return $r;
  }

  public function get()
  {
    if ( ! $this->sql_select)
      $this->select();

    if ($this->sql_where) {
      $this->sql_where = trim($this->sql_where, ' AND');
    }

    $this->sql = "SELECT $this->sql_select from $this->table $this->sql_join $this->sql_where $this->sql_order_by $this->sql_limit";
    // dd($this->sql);
    $this->execute();
    $this->init_sql();
    return $this->get_data();
  }

  // sql 语句准备与执行

  public function prepare()
  {
    $this->pdo_stmt = $this->pdo->prepare($this->sql);
  }

  public function execute()
  {
    $this->prepare();
    return $this->pdo_stmt->execute();
  }

  public function get_data()
  {
    return $this->pdo_stmt->fetchAll(PDO::FETCH_ASSOC);
  }

  public function init_sql()
  {
    $this->sql =
    $this->sql_select =
    $this->sql_column =
    $this->sql_value =
    $this->sql_update =
    $this->sql_where =
    $this->sql_order_by =
    $this->sql_join =
    $this->sql_limit = '';
    $this->where_count = 0;
    $this->where_relation = 'AND';
  }

  public function all_column()
  {
    $this->sql = "desc $this->table";
    $this->execute();
    $r = $this->get_data();
    $this->init_sql();
    return $r;
  }

  public function all_column_name()
  {
    $name_list = [];
    foreach ($this->all_column() as $col) {
      $name_list[] = $col['Field'];
    }
    return $name_list;
  }

  public function last_id()
  {
    return $this->pdo->lastInsertId();
  }

  public function exist()
  {
    $this->limit(1);
    return (bool) $this->get();
  }

  public function first()
  {
    $this->limit(1);
    return @$this->get()[0];
  }
}

