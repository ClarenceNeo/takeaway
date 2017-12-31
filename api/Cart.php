<?php

import('api/Api');

class Cart extends Api
{
  public $table = 'cart';

  public function find_cart($id, &$msg)
  {
    $user_id = $_SESSION['user']['id'];
    return $this->where([
      'user_id'=> $user_id,
      'product_id' => $id
    ])->get();
  }

  public function add_cart($param, &$msg)
  {
    $id = @$param['product_id'];

    $row = [
      'user_id' => @$_SESSION['user']['id'],
      'product_id' => $id
    ];

    $current = $this->find_cart($id, $msg);

    if ($current) {
      ++$current[0]['count'];
      $this->add_or_change($current[0], $msg);
    } else {
      $row['count'] = 1;
      $this->add_or_change($row, $msg);
    }
    // return $this->read_cart();
  }

  public function reduce_cart($param, &$msg)
  {
    $id = @$param['id'];
    $product_id = @$param['product_id'];
    $current = $this->find_cart($product_id, $msg);
    // dd($id);
    if ($current[0]['count'] == 1) {
      // dd($id);
      $this->remove(@$param, $msg);
    }else{
      --$current[0]['count'];
      $this->add_or_change($current[0], $msg);
    }
  }

  public function read_cart()
  {
    $data = [];
    $count = 0;
    $user_id = $_SESSION['user']['id'];
    // $r = $this->where('user_id',$user_id)
    //       ->get();
    $r = $this->select(['product.title','cart.product_id','product.price','cart.count','cart.user_id','cart.id'])
    ->join(['product','user'])
    ->where('user.id',$user_id)
    ->order_by('id')
    ->get();
    foreach ($r as $key => $value) {
      $count += $r[$key]['count'];
    }

    $data['list'] = $r;
    $data['count'] = $count;
    return $data;
  }

  public function clear($param){
    $id = @$param["user_id"];
    // dd($id);
    return $this->where('user_id',$id)
      ->delete();
  }

  // public function read_shopping_cart()
  // {
  //   return $this->select(['product.title','cart.product_id','product.price','cart.count','cart.user_id'])
  //   ->join(['product','user'])
  //   ->where('user.id',27)
  //   ->get();
  // }

  public function add_or_update($p, &$msg)
  {

    // dd($p);
    $product_id = @$p['product_id'];
    $count = @$p['count'];

    if($count === '0'){
      return $this->where('product_id', $product_id)->delete();
    }

    if ( ! $product_id || ! $count || ! ($product = (new Product)->find($product_id))) {
      $msg = 'invalid:product_id||count';
      return false;
    }

    $exist = $this
      ->where('product_id', $product_id)
      ->where('user_id', his('id'))
      ->first();

    if ($exist) {
      $p = array_merge($exist, $p);
      //$r = $this->update($merged);
    }

    $p['user_id'] = his('id');
    $this->safe_fill($p);
    return $this->save($msg);
  }

}