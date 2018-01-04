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

  // public function read($param = [], &$msg)
  // {
  //   $id = $_SESSION['user']['id'];
  //   $page = @$param['page'] ?: 1;
  //   return $this
  //     ->where('user_id', $id)
  //     ->page($page)
  //     ->order_by('id')
  //     ->get();
  // }

  public function read($p = null, &$msg = null)
  {
    if (he_is('admin'))
      return parent::read($p, $msg);

    return $this
      ->where('user_id', his('id'))
      ->get();
   }

  // public function checkout($p, &$msg = null)
  // {
  //   // dd($p);
  //   //{list: [{id: 1, count: 3}, {id:3, count: 2, memo: "不加冰"}]}
  //   $product_ins = new Product();
  //   $list = @$p['list'];
  //   $price = 0;
  //   $snapshot = [
  //     'product' => [],
  //   ];
  //   $row = [];

  //   foreach ($list as $product_info) {
  //     $pid = @$product_info['product_id'];
  //     $count = $product_info['count'];
  //     if ( ! $pid || ! $count || ! ($product = $product_ins->find($pid))) {
  //       $msg = 'invalid:id&&count';
  //       return false;
  //     }
  //     $price += (float) $product['price'] * (int) $count;
  //     $snapshot['product'][] = $product;
  //   }
  //   $row['user_id'] = his('id');
  //   $row['product'] = json_encode($list);
  //   $row['snapshot'] = json_encode($snapshot);
  //   $row['order_num'] = $this->generate_order_num();
  //   return $this->insert($row);
  // }

  public function checkout($p = null, &$msg = null)
  {
    //{list: [{id: 1, count: 3}, {id:3, count: 2, memo: "不加冰"}]}
    $product_ins = new Product();
    $cart = new Cart();
    $list = $cart->his_product();
    if ( ! $list) return false;
    $price = 0;
    $snapshot = [
      'product' => [],
    ];

    $row = [];
    foreach ($list as $cart_item) {
      $pid = @$cart_item['product_id'];
      $count = $cart_item['count'];
      if ( ! $pid || ! $count || ! ($product = $product_ins->find($pid))) {
        $msg = 'invalid:id&&count';
        return false;
      }
      $price += (float) $product['price'] * (int) $count;
      $snapshot['product'][] = $product;
    }
    $row['user_id'] = his('id');
    $row['product'] = json_encode($list,JSON_UNESCAPED_UNICODE);
    $row['snapshot'] = json_encode($snapshot,JSON_UNESCAPED_UNICODE);
    $row['order_num'] = $this->generate_order_num();
    if ($this->insert($row)) {
      return $cart->clear_his_cart();
    }
  }

  public function generate_order_num()
  {
    $max = $this
      ->order_by('id')
      ->limit(1)
      ->get();

    $last_id = (int) @$max[0]['id'];
    return rand(100, 999) . ($last_id + 1);
  }
}