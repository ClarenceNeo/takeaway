;(function(){
  'use strict';

  var cat = new Model('cat');
  var product = new Model('product');
  var cart = new Model('cart');
  var order = new Model('order');

  var el_cart = document.querySelector('.sidebarcart-box');
  var el_cat_list = document.querySelector('.cat-list');
  var el_product_list = document.querySelector('#product-wrap');
  var el_submit_order = document.getElementById('submit-order');
  var el_price_sum = document.querySelector('.sidebarcart-summary-amount');

  cart.selected = {};
  cart.price_sum = 0;

  /*====== product =======*/
  product.read_cat_group = function () {
    $.get('/api/product/read_cat_group')
      .then(function (r) {
        var data = r.data;
        // console.log(data);
        el_product_list.innerHTML = '';
        for (var key in data) {
          
          var list = data[key];
          // console.log(list);
          var el_group = document.createElement('div');
          el_group.id = 'cat-' + key;
          el_group.classList.adds('box main row product');
          // var index  = key;
          (function get_cat(key, el_group) {
            $.get('api/cat/read')
              .then(function (r) {
                if (r.success) {
                  // console.log(r.data);
                  var row = r.data.find(function (item) {
                    if(item.id == key){
                      return true;
                    }
                  })
                  var el = document.createElement('h2');
                  el.classList.add('cat-title');
                  el.innerText = row.title;
                  // el_group.appendChild(el);
                  el_group.insertBefore(el, el_group.firstChild);
                  // console.log(el_group);
                  // console.log(row);
                }
              })
          })(key, el_group);
          
          el_product_list.appendChild(el_group);

          list.forEach(function (product) {
            var el_product = document.createElement('div');
            el_product.classList.adds('item col col-4 row');
            el_product.innerHTML = `
              <div class="col col-4">
                <a class="product-img tac" href=""><img src="upload/${product['cover_path']}" alt=""></a>
                <div class="product-time"></div>
              </div>
              <div class="col col-8 product-right">
                <h3 class="product-item product-title">${product.title}</h3>
                <div class="product-item product-sales">月售<span>${product.sales}</span>单</div>
                <div class="product-item product-price">¥ <span>${product.price}</span></div>
                <button class="product-item product-cart">加入购物车 <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
              </div>
              `;
            el_group.appendChild(el_product);

            el_product
              .querySelector('.product-cart')
              .addEventListener('click', function () {
                // console.log(1);
                var cart_row = cart.selected[product.id] = {
                  count: 1,
                  product_id: product.id,
                  price: product.price,
                  title: product.title
                }

                // console.log(cart_row);
                cart.on_change(cart_row);
                cart.render();
              })
          })
        }
      })
  }
  
  /*====== cat =======*/
  cat.after_read = function () {
    // console.log(cat);
    cat.list_each(function (row) {
      var el = document.createElement('a');
      el.classList.add('cat-item','col','col-2');
      el.href = '#cat-' + row.id;
      el.innerText = row.title;
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var href = this.attributes.getNamedItem("href").value;
        $("html,body").animate({ scrollTop: $(href).offset().top - 90 }, 200);
      });
      el_cat_list.appendChild(el);
    })

    window.onscroll = function () {
      updateSliderControl();
    }
  }

  /*====== cart =======*/
  cart.after_read = function () {
    cart.list.forEach(function (row) {
      cart.selected[row.product_id] = row;
      cart.render();
    })
  }

  cart.render = function () {
    cart.render_sum();
    // console.log(cart);
    el_cart.innerHTML = '';
    for (var key in cart.selected) {
      (function (key) {
        var row = cart.selected[key];
        // var index = key;
        // console.log(row);
        var el = document.createElement('div');
        el.classList.add('sidebarcart-box-item');
        var product_price_sum = row.price * row.count;

        cart.price_sum += product_price_sum;
        el.innerHTML = `
          <div class="title">${row.title}</div>
          <div class="count">
            <button class="minus">-</button>
            <input class="count-num" type="text" value="${row.count}">
            <button class="add">+</button>
          </div>
          <div class="product-price-sum red">¥ ${product_price_sum}</div>
        `;

        function on_count_change(add, index) {
          var el_count = el.querySelector('.count-num');
          if (add)
            el_count.value = ++row.count;
          else
            el_count.value = --row.count;
          if (row.count < 1) {
            cart.on_change({
              product_id: row.product_id,
              count: 0
            });
            delete cart.selected[key];
            cart.render();
          }

          cart.on_change(row);
          cart.render_sum();
          el.querySelector('.product-price-sum')
            .innerText = '¥' + row.price * row.count;
        }

        el_cart.appendChild(el);
        el.querySelector('.add')
          .addEventListener('click', function () {
            on_count_change(true);
          });

        el.querySelector('.minus')
          .addEventListener('click', function () {
            on_count_change(false);
          })

      }
      )(key);
    }
  }

  cart.render_sum = function () {
    cart.price_sum = 0;
    cart.count = 0;
    for (var key in cart.selected) {
      var row = cart.selected[key];
      cart.price_sum += row.price * row.count;
      cart.count += row.count;
    }
    el_price_sum.innerText = cart.price_sum;
    render_cart_count(cart.count);
  }

  cart.on_change = function (row) {
    $.post('/api/cart/add_or_update', row)
      .then(function (r) {
        if (!r.success)
          alert('网络错误');
      })
  }

  function render_cart_count(count) {
    // console.log(count);
    var el = document.querySelector('.cart-count-box');
    var el_sidebar = document.querySelector('.sidebarcart-summary-count');
    el.innerHTML = '';
    var div = document.createElement('div');
    div.classList.add('cart-count');
    div.innerText = count;
    el_sidebar.innerText = count;
    el.appendChild(div);
  }

  /*====== order =======*/
  order.bind_event = function () {
    el_submit_order.addEventListener('click', function () {
      $.get('/api/order/checkout')
        .then(function (r) {
          console.log(r);
          if (r.success) {
            alert('下单成功');
            cart.selected = {};
            cart.render();
          }
        })
    })
  }

  function init() {
    cat.read();
    cart.read();
    product.read_cat_group();
    order.bind_event();
  }

  var cartBtn = document.querySelector('.cart-btn');
  var sidebar = document.querySelector('.siderbar');
  var musk = document.querySelector('.musk');
  var isClicked = true;
  cartBtn.addEventListener('click', function () {
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

  function updateSliderControl() {
    // 获得所有的 slider 链接
    var links = document.querySelectorAll('#cat-list a');

    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      // 获取被链接指向的部分
      var section = document.querySelector(link.getAttribute("href"));
      var sectionTop = section.offsetTop - 90;
      var sectionBottom = section.getBoundingClientRect().bottom - section.getBoundingClientRect().top + section.offsetTop - 35;

      // 检查 window.scrollY 是否在这部分中
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
        link.classList.add('cat-active');
      } else {
        link.classList.remove('cat-active');
      }
    }
  }

  var cat_box = document.getElementById("wrap");
  var ot = cat_box.offsetTop;
  document.onscroll = function () {
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    cat_box.setAttribute("data-fixed", st >= ot ? "fixed" : "")
  }

  document.querySelector('.sidebar-btn-backtop').addEventListener('click', function () {
    $("html,body").animate({ scrollTop: 0 }, 200);
  })

  init();

})();