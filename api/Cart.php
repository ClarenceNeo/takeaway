<?php

import('api/Api');

class Cart extends Api
{
  public $table = 'cart';

  public function add_cart($param, &$msg)
  {
    
    $row['user_id'] = $_SESSION['user']['id'];
    $row['product_id'] = @$param['product_id'];
    $row['count'] = @$param['count']?:1;
    // $this->add_or_change($row, $msg);
    return $this->where('user_id',$row['user_id'])
        ->get();
  }
}