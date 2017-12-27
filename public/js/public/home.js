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

  cart.read_cart();

  cart.after_read_cart = function() {
    if (this.count) {
      render_cart_count(this.count);
      render_cart_shopping(this.list);
    }
  }

  product.after_render = function(el,item) {
    var cart_btn = el.querySelector(".product-cart");
    var id = item.id;
    console.log(id);
    // return;
    cart_btn.addEventListener('click',function() {
      cart.add_cart(id);
      cart.read_cart();
    })
  }

  function render_cart_count(count){
    var el = document.querySelector('.cart-count-box');
    el.innerHTML = '';
    var div = document.createElement('div');
    div.classList.add('cart-count');
    div.innerText = count;
    el.appendChild(div);
  }

  function render_cart_shopping(list){
    var el = document.querySelector('.sidebarcart-box');
    el.innerHTML = '';
    list.forEach(function(item) {
      var div = document.createElement('div');
      div.classList.add('sidebarcart-box-item');
      div.innerHTML = `
        <div class="title">${item.title}</div>
        <div class="count">
          <button id="reduce-count">-</button>
          <input type="text" value="${item.count}">
          <button id="add-count">+</button>
        </div>
        <div class="price">¥ ${item.price * item.count}</div>
      `;
      var id = item.product_id;
      div.querySelector('#add-count').addEventListener('click', function() {
        // console.log(id);
        cart.add_cart(id);
        cart.read_cart();
      })
      el.appendChild(div);
    })
  }

  var cartBtn = document.querySelector('.cart-btn');
  var sidebar = document.querySelector('.siderbar');
  var isClicked = true;
  cartBtn.addEventListener('click', function() {
    if (isClicked) {
      sidebar.classList.add('show-sidebar');
      isClicked = false;
    }else{
      sidebar.classList.remove('show-sidebar');
      isClicked = true;
    }
    
  })

})();