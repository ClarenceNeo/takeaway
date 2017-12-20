<?php

import('db/Db');

class Validator extends Db
{

  /*
  * @param string $rules 要解析的验证规则
  * 'max_length:24|min_length:4' =>
  * ['max_length' => 24, 'min_length' => 4]
  * */

  function parse_rules($rules)
  {
    $rules = explode('|', $rules);
    $arr = [];

    foreach ($rules as $rule) {
      $rule_arr = explode(':', $rule);
      // $arr[$rule_arr[0]] = $rule_arr[1];
      if (count($rule_arr) == 1)
        $arr[$rule_arr[0]] = true;
      else
        $arr[$rule_arr[0]] = $rule_arr[1];
    }

    return $arr;
  }

  function validate_rules($val, $rules, &$error = null)
  {
    // var_dump($rules);
    if (is_string($rules)) {
      $rules = $this->parse_rules($rules);
    }
    foreach((array) $rules as $type => $param){
      $method = 'valid_' . $type;
      // var_dump($method);
      $r = $this->$method($val, $param);
      if(!$r){
        $error = 'invalid_' . $type;
        return false;
      }
    }
    return true;
  }

  function valid_max_length($val, $max)
  {
    $val = (string) $val;
    return strlen($val) <= $max;
  }

  function valid_min_length($val, $min)
  {
    $val = (string) $val;
    return strlen($val) >= $min;
  }

  function valid_betten($val, $min, $max)
  {
    return
      $this->valid_min_length($val, $min) &&
      $this->valid_max_length($val, $max);
  }

  function valid_integer($val)
  {
    if(!is_numeric($val))
      return false;
    $val = (string) $val;
    return strpos($val, '.') === false;
  }

  public function valid_numeric($val){
    return is_numeric($val);
  }

  public function valid_positive($val)
  {
    $val = (float) $val;
    return $val >= 0;
  }

  public function valid_json($val)
  {
    json_decode('\uasdsf');
    dd(json_last_error_msg());
  }

  public function valid_regex($val, $reg)
  {
    return !! preg_matach($reg, $val, $r);
  }

  public function valid_in($val, $arr)
  {
    return in_array($val, $arr);
  }

  public function valid_unique($val, $col)
  {
    return ! $this->valid_exist($val, $col);
  }

  public function valid_exist($val, $col)
  {
    // var_dump($col);
    return $this->where($col, $val)->exist();
  }
}

