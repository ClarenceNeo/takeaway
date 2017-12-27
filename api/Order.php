<?php

import('api/Api');

class Order extends Api
{
  public $table = 'order';

  public function add($param, &$msg)
  {
    $p = $param;
    $p['order_num'] = time();
    $p['product'] = json_encode($param['product']);
    // dd($p);
    $this->add_or_change($p, $msg);
  }
}