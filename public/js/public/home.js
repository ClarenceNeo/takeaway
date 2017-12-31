;(function(){
  'use strict';

  var cart = new Model('cart');

  cart.read_cart();

  var cat = new Ui('cat', '#cat-list');

  cat.list_tpl_maker = function(item) {
    return `
      <a href="#cat${item.id}" class="cat-item">${item.title}</a>
    `;
  }
  cat.read();

  function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll("#slider-control a")

    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      // 获取被链接指向的部分
      var section = document.querySelector(link.getAttribute("href"));
      var sectionTop = section.offsetTop;
      var sectionBottom = section.getBoundingClientRect().bottom - section.getBoundingClientRect().top + section.offsetTop;

      // 检查 window.scrollY 是否在这部分中
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
        link.className = "active";
      } else {
        link.className = "";
      }
    }
  }

  cat.after_render_list = function() {
    var links = document.querySelectorAll('#cat-list a');
    // for (var i = 0; i < links.length; i++) {
    //   var link = links[i];

    //   link.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     var href = link.attributes.getNamedItem("href").value;
    //     // console.log(href);
    //     var target = document.querySelector(href);
    //     console.log(target);
    //     scrollToElement(target);
    //   });
    // }

    links[0].addEventListener('click', function (e) {
      e.preventDefault();
      var href = links[0].attributes.getNamedItem("href").value;
      $("html,body").animate({ scrollTop: $(href).offset().top }, 200);
    })

    links[1].addEventListener('click', function (e) {
      e.preventDefault();
      var href2 = links[1].attributes.getNamedItem("href").value;
      $("html,body").animate({ scrollTop: $(href2).offset().top }, 200);
    })

    var section = document.querySelector(links[0].getAttribute("href"));
    var sectionTop = section.offsetTop;
    // var sectionBottom = section.getBoundingClientRect().bottom - section.getBoundingClientRect().top + section.offsetTop;
    // console.log(section,sectionTop,sectionBotton);
  }

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

  cart.after_read_cart = function() {
    if (this.count != -1) {
      render_cart_count(this.count);
      render_cart_shopping(this.list);
    }
  }

  cart.after_add_or_update = function() {
    cart.read_cart();
  }

  product.after_render = function(el,item) {
    var cart_btn = el.querySelector(".product-cart");
    var product = {
      'product_id' : item.id,
      'count' : 1
    }
    cart_btn.addEventListener('click', function () {
      cart.list.forEach(function (i) {
        if (i['product_id'] == item.id) {
          product.count = i.count + 1;
        }
      })
      console.log(product);
      cart.add_or_update(product);
    })
  }

  function render_cart_count(count){
    var el = document.querySelector('.cart-count-box');
    var el_sidebar = document.querySelector('.sidebarcart-summary-count');
    el.innerHTML = '';
    var div = document.createElement('div');
    div.classList.add('cart-count');
    div.innerText = count;
    el_sidebar.innerText = count;
    el.appendChild(div);
  }

  function render_cart_shopping(list){
    var el = document.querySelector('.sidebarcart-box');
    var el_amount = document.querySelector('.sidebarcart-summary-amount')
    el.innerHTML = '';
    cart.amount = 0;
    list.forEach(function(item) {
      var price = item.price * item.count;
      cart.amount += price;
      var div = document.createElement('div');
      div.classList.add('sidebarcart-box-item');
      div.innerHTML = `
        <div class="title">${item.title}</div>
        <div class="count">
          <button id="reduce-count">-</button>
          <input type="text" value="${item.count}">
          <button id="add-count">+</button>
        </div>
        <div class="price red">¥ ${price}</div>
      `;
      var product = {
        'product_id': item.product_id,
      }
      div.querySelector('#add-count').addEventListener('click', function() {
        cart.list.forEach(function (i) {
          if (i['product_id'] == item.product_id) {
            product.count = i.count + 1;
          }
        })
        // console.log(product);
        cart.add_or_update(product);
      })
      div.querySelector('#reduce-count').addEventListener('click', function() {
        cart.list.forEach(function (i) {
          if (i['product_id'] == item.product_id) {
            product.count = i.count - 1;
          }
        })
        console.log(product);
        cart.add_or_update(product);
      })
      
      el.appendChild(div);
    })

    el_amount.innerText = cart.amount;
  }

  var cartBtn = document.querySelector('.cart-btn');
  var sidebar = document.querySelector('.siderbar');
  var musk = document.querySelector('.musk');
  var isClicked = true;
  cartBtn.addEventListener('click', function() {
    if (isClicked) {
      sidebar.classList.add('show-sidebar');
      musk.classList.add('show');
      isClicked = false;
    }else{
      sidebar.classList.remove('show-sidebar');
      musk.classList.remove('show');
      isClicked = true;
    }
  })

  musk.addEventListener('click', function () {
    if (isClicked) {
      sidebar.classList.add('show-sidebar');
      musk.classList.add('show');
      isClicked = false;
    } else {
      sidebar.classList.remove('show-sidebar');
      musk.classList.remove('show');
      isClicked = true;
    }
  })

  var order = new Model('order');

  order.after_checkout = function () {
    cart.clear();
  }

  cart.after_clear = function() {
    cart.read_cart();
  }

  cart.clear = function () {
    $.post('/api/' + this.name + '/clear', { user_id: cart.list[0].user_id })
      .then(function (r) {
        if (this.after_clear) {
          this.after_clear();
        }
      }.bind(this))
  }

  var el_order = document.querySelector('#submit-order');

  el_order.addEventListener('click', function(){
    
    if (!cart.list.length) {
      return;
    }
    // console.log(cart.count, cart.amount, cart.list);

    var order_form = {
      list: cart.list
    }

    order.checkout(order_form);

  })

  // $.post('/api/cart/add_or_update', {
  //   product_id: 30,
  //   count: 4
  // })
  // $.post('/api/order/checkout', {
  //   list: [
  //     {id: 29, count: 2},
  //     {id: 30, count: 1}
  //   ]
  // })


  var obj = document.getElementById("wrap");
  var ot = obj.offsetTop;
  document.onscroll = function () {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    obj.setAttribute("data-fixed", st >= ot ? "fixed" : "")
  }

})();