;(function(){
  'use strict';

  // var cart = new Model('cart');

  // cart.read_cart();

  // var cat = new Ui('cat', '#cat-list');

  // cat.list_tpl_maker = function(item) {
  //   return `
  //     <a href="#cat${item.id}" class="cat-item">${item.title}</a>
  //   `;
  // }
  // cat.read();

  // cat.after_render_list = function() {
    // var links = document.querySelectorAll('#cat-list a');
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

    // links[0].addEventListener('click', function (e) {
    //   e.preventDefault();
    //   var href = links[0].attributes.getNamedItem("href").value;
    //   $("html,body").animate({ scrollTop: $(href).offset().top-74 }, 200);
    // })

    // links[1].addEventListener('click', function (e) {
    //   e.preventDefault();
    //   var href2 = links[1].attributes.getNamedItem("href").value;
    //   $("html,body").animate({ scrollTop: $(href2).offset().top-74 }, 200);
    // })

    // window.onscroll = function () {
    //   updateSliderControl();
    // }
    // var el_product_wrap = document.querySelector('#product-wrap');

    // var product = new Model('product');
    // product.read();

    // el_product_wrap.innerHTML = '';
    // this.list.forEach(function(item) {
    //   // console.log(item);
    //   var div = document.createElement('div');
    //   div.classList.add('cat');
    //   div.id = 'cat' + item.id;
    //   div.innerHTML = `
    //     <h2>${item.title}</h2>
    //   `;
    //   el_product_wrap.appendChild(div);
    // })

    
    // product.after_read = function () {
    //   cat.list.forEach(function(item) {
    //     var catId = '#cat' +item.id;
    //     var el = document.querySelector(catId);
    //     this.list.forEach(function(product){
    //       if (product.cat_id == item.id) {
    //         var el_product = document.createElement('div');
    //           el_product.classList.adds('item col col-4 row');
    //           el_product.innerHTML = `
    //             <div class="col col-4">
    //               <a class="product-img tac" href=""><img src="upload/${product['cover_path']}" alt=""></a>
    //               <div class="product-time"></div>
    //             </div>
    //             <div class="col col-8 product-right">
    //               <h3 class="product-item product-title">${product.title}</h3>
    //               <div class="product-item product-sales">月售<span>${product.sales}</span>单</div>
    //               <div class="product-item product-price">¥ <span>${product.price}</span></div>
    //               <button class="product-item product-cart">加入购物车 <i class="fa fa-shopping-cart" aria-hidden="true"></i></button>
    //             </div>
    //             `;
    //           var cart_btn = el_product.querySelector(".product-cart");
    //           var data = {
    //             'product_id': product.id,
    //             'count': 1
    //           }
    //           cart_btn.addEventListener('click', function(){
    //             console.log(cart.list);
    //           })
    //           // console.log(cart_btn);
    //           el.appendChild(el_product);
    //       }
    //     })
    //   }.bind(this))
    // }

    // product.after_render = function(el,item) {
    //   var cart_btn = el.querySelector(".product-cart");
    //   var product = {
    //     'product_id' : item.id,
    //     'count' : 1
    //   }
    //   cart_btn.addEventListener('click', function () {
    //     cart.list.forEach(function (i) {
    //       if (i['product_id'] == item.id) {
    //         product.count = i.count + 1;
    //       }
    //     })
    //     // console.log(product);
    //     cart.add_or_update(product);
    //   })
    // }
  // }

  // cart.after_read_cart = function() {
  //   if (this.count != -1) {
  //     render_cart_count(this.count);
  //     render_cart_shopping(this.list);
  //   }
  // }

  // cart.after_add_or_update = function() {
  //   cart.read_cart();
  // }

  // function render_cart_shopping(list){
  //   var el = document.querySelector('.sidebarcart-box');
  //   var el_amount = document.querySelector('.sidebarcart-summary-amount')
  //   el.innerHTML = '';
  //   cart.amount = 0;
  //   list.forEach(function(item) {
  //     var price = item.price * item.count;
  //     cart.amount += price;
  //     var div = document.createElement('div');
  //     div.classList.add('sidebarcart-box-item');
  //     div.innerHTML = `
  //       <div class="title">${item.title}</div>
  //       <div class="count">
  //         <button id="reduce-count">-</button>
  //         <input type="text" value="${item.count}">
  //         <button id="add-count">+</button>
  //       </div>
  //       <div class="price red">¥ ${price}</div>
  //     `;
  //     var product = {
  //       'product_id': item.product_id,
  //     }
  //     div.querySelector('#add-count').addEventListener('click', function() {
  //       cart.list.forEach(function (i) {
  //         if (i['product_id'] == item.product_id) {
  //           product.count = i.count + 1;
  //         }
  //       })
  //       // console.log(product);
  //       cart.add_or_update(product);
  //     })
  //     div.querySelector('#reduce-count').addEventListener('click', function() {
  //       cart.list.forEach(function (i) {
  //         if (i['product_id'] == item.product_id) {
  //           product.count = i.count - 1;
  //         }
  //       })
  //       console.log(product);
  //       cart.add_or_update(product);
  //     })
      
  //     el.appendChild(div);
  //   })

  //   el_amount.innerText = cart.amount;
  // }

  // var order = new Model('order');

  // order.after_checkout = function () {
  //   cart.clear();
  // }

  // cart.after_clear = function() {
  //   cart.read_cart();
  // }

  // cart.clear = function () {
  //   $.post('/api/' + this.name + '/clear', { user_id: cart.list[0].user_id })
  //     .then(function (r) {
  //       if (this.after_clear) {
  //         this.after_clear();
  //       }
  //     }.bind(this))
  // }

  // var el_order = document.querySelector('#submit-order');

  // el_order.addEventListener('click', function(){
    
  //   if (!cart.list.length) {
  //     return;
  //   }
  //   // console.log(cart.count, cart.amount, cart.list);

  //   var order_form = {
  //     list: cart.list
  //   }

  //   order.checkout(order_form);

  // })

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


  // var obj = document.getElementById("wrap");
  // var ot = obj.offsetTop;
  // document.onscroll = function () {
  //   var st = document.body.scrollTop || document.documentElement.scrollTop;
  //   obj.setAttribute("data-fixed", st >= ot ? "fixed" : "")
  // }

  // document.querySelector(".sidebar-btn-backtop").addEventListener('click', function (e) {
  //   $("html,body").animate({ scrollTop: 0 }, 200);
  // })


  // function updateSliderControl() {
  //   // 获得所有的 slider 链接
  //   // var links = document.querySelectorAll("#slider-control a")

  //   // for (var i = 0; i < links.length; i++) {
  //   //   var link = links[i];

  //   //   // 获取被链接指向的部分
  //   //   var section = document.querySelector(link.getAttribute("href"));
  //   //   var sectionTop = section.offsetTop;
  //   //   var sectionBottom = section.getBoundingClientRect().bottom - section.getBoundingClientRect().top + section.offsetTop;

  //   //   // 检查 window.scrollY 是否在这部分中
  //   //   if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
  //   //     link.className = "active";
  //   //   } else {
  //   //     link.className = "";
  //   //   }
  //   // }

  //   var links = document.querySelectorAll('#cat-list a');

  //   var section = document.querySelector(links[0].getAttribute("href"));
  //   var sectionTop = section.offsetTop - 74;
  //   var sectionBottom = section.getBoundingClientRect().bottom - section.getBoundingClientRect().top + section.offsetTop - 74;

  //   // console.log(sectionBottom);

  //   // console.log(window.pageYOffset);

  //   if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
  //     links[0].classList.add('cat-active');
  //     // console.log(window.pageYOffset)
  //   } else {
  //     links[0].classList.remove('cat-active');
  //   }
  // }

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
                  product_price: product.price,
                  product_title: product.title
                }

                // console.log(cart_row);
                cart.on_change(cart_row);
                cart.render();
              })
          })
        }
      })
  }
  // product.after_read = function () {
  //   product.list_each(function (row) {
  //     var el = document.createElement('div');
  //     el.classList.add('product-item', 'clearfix');
  //     el.innerHTML = `
  //         <div class="col-xs-5">
  //           <img src="/upload/${row.cover_path}">
  //         </div>
  //         <div class="col-xs-7 detail">
  //           <div class="title">${row.title}</div>
  //           <div class="other">库存：${row.stock}</div>
  //           <div class="other">月销：${row.sales}</div>
  //           <div class="price">￥ ${row.price}</div>
  //           <button class="add" type="button">+</button>
  //         </div>
  //     `;
  //
  //     var timer; // 提升变量
  //     var count = 1;
  //
  //     el
  //       .querySelector('.add')
  //       .addEventListener('click', function () {
  //         /*清除上次点击生成的计时器，
  //         一旦在计时器超时前将其清除，
  //         其内部的任何操作都不会执行*/
  //         clearTimeout(timer);
  //         count++;
  //         /*生成这次点击的计时器*/
  //         timer = setTimeout(function () {
  //           /*300毫秒之后执行底下的操作*/
  //           $.post('/api/cart/add_or_update', {
  //             product_id: 30,
  //             count: count
  //           })
  //         }, 300);
  //       })
  //
  //     el_product_list.appendChild(el);
  //   })
  // }

  /*====== cat =======*/
  cat.after_read = function () {
    // console.log(cat);
    cat.list_each(function (row) {
      var el = document.createElement('a');
      el.classList.add('cat-item');
      el.href = '#cat-' + row.id;
      el.innerText = row.title;
      el_cat_list.appendChild(el);
    })
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
    console.log(cart);
    el_cart.innerHTML = '';
    for (var key in cart.selected) {
      (function () {
        var row = cart.selected[key];
        console.log(row);
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

        function on_count_change(add) {
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
      )();
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
    console.log(count);
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

  init();

})();