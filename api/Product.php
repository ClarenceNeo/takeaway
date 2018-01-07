<?php

import('api/Api');

class Product extends Api
{
  public $table = 'Product';

  public $rule = [
    'title' => 'max_length: 24|min_length:2',
    'price' => 'numeric|positive'
  ];

  public function add($p, &$msg)
  {

    unset($p['cover_path']);
    $id = $this->safe_fill($p)->save($msg);

    if ($id) {
      if (move_uploaded('cover_path', $upload)){
        $this
          ->where('id', $id)
          ->update(['cover_path' => $upload['fullname']]);
      }
      return $id;
    }

    return false;
  }

  public function read_cat_group()
  {
    $s = $this
      ->pdo
      ->prepare('select cat_id, product.* from product');
    $s->execute();
    return $s->fetchAll(PDO::FETCH_GROUP|PDO::FETCH_ASSOC);
  }
}