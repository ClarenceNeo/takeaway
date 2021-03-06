<?php

import('api/Api');
import('api/Product');
import('api/Cart');
import('api/User');

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

  public $status_list = [
    'created'  => [
      'name' => '已接单',
    ],
    'sending'  => [
      'name' => '派送中',
    ],
    'received' => [
      'name' => '已收货',
    ],
    'closed'   => [
      'name' => '已关闭',
    ],
  ];

  public function read_status_list()
  {
    return $this->status_list;
  }

  public function read($p = null, &$msg = null)
  {
    if (he_is('admin')) {
      $user = new User;
      $list = parent::read($p, $msg);
      foreach ($list as $i => $order) {
        $list[$i]['user'] = $user
          ->select(['id', 'username'])
          ->find($order['user_id']);
      }
      return $list;
    }

    return $this
      ->where('user_id', his('id'))
      ->get();
   }

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

  public function update_status($p)
  {
    // dd($p);
    $id = @$p['id'];
    $status = @$p['status'];
    if ( ! $status || ! $id || ! ($row = $this->find($id)))
      return e('invalid:id||status');

    if ( ! key_exists($status, $this->status_list))
      return e('invalid:status');

    return $this->where('id', $id)->update(['status' => $status]);
  }
}