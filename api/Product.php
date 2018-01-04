<?php

import('api/Api');

class Product extends Api
{
  public $table = 'Product';

  public $rule = [
    'title' => 'max_length: 24|min_length:4',
    'price' => 'numeric|positive'
  ];

  public function add($p, &$msg)
  {
    $this->safe_fill($p);
    if ($id = $this->save()) {
      move_uploaded('cover', $upload);
      $this
        ->where('id', $id)
        ->update(['cover_path' => $upload['fullname']]);
    }
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