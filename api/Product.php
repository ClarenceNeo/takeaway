<?php

import('api/Api');

class Product extends Api
{
  public $table = 'Product';

  public $rule = [
    'title' => 'max_length: 24|min_length:4',
    'price' => 'numeric|positive'
  ];
}