;(function(){
  'use strict';

  var cat = new Ui('cat', '#cat-list');

  cat.list_tpl_maker = function(item) {
    return `
      <a href="" class="cat-item">${item.title}</a>
    `;
  }
  cat.read();

  var product = new Ui('product', '#product-list', 'item col col-4 row');

  product.list_tpl_maker = function(item) {
    return `
      <div class="col col-4">
        <a class="product-img tac" href=""><img src="${item['cover_path']}" alt=""></a>
        <div class="product-time">${item['delivery_time']} 分钟</div>
      </div>
      <div class="col col-8 product-right">
        <h3 class="product-item product-title">${item.title}</h3>
        <div class="product-item product-sales">月售<span>${item.sales}</span>单</div>
        <div class="product-item product-delivery">配送费 ¥<span>${item['delivery_fee']}</span></div>
        <div class="product-item product-price">¥ <span>${item.price}</span></div>
        <button class="product-item product-cart">加入购物车 <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
      </div>
    `;
  }

  product.read();

  var cart = new Model('cart');

  product.after_render = function(el,item) {
    var cart_btn = el.querySelector(".product-cart");
    var id = item.id;
    cart_btn.addEventListener('click',function() {
      cart.add_cart(id);
    })
  }
})();