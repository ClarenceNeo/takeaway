<?php

import('api/Api');

class Cart extends Api
{
  public $table = 'cart';

  public function add_cart($param, &$msg)
  {
    
    $row['user_id'] = $_SESSION['user']['id'];
    $row['product_id'] = @$param['product_id'];

    $this->where([
      'user_id'=> $row['user_id'],
      'product_id' => $row['product_id']
    ]);

    $current = $this->get();

    if ($current) {
      ++$current[0]['count'];
      $this->add_or_change($current[0], $msg);
    } else {
      $row['count'] = 1;
      $this->add_or_change($row, $msg);
    }
    // return $this->read_cart();
  }

  public function read_cart()
  {
    $data = [];
    $count = 0;
    $user_id = $_SESSION['user']['id'];
    $r = $this->where('user_id',$user_id)
          ->get();
    foreach ($r as $key => $value) {
      $count += $r[$key]['count'];
    }

    $data['list'] = $r;
    $data['count'] = $count;
    return $data;
  }
}