;(function(){
  'use strict';
  var order = new Ui('order', '#list tbody');

  order.read_status_list = function () {
    return $.get('/api/order/read_status_list')
      .then(function (r) {
        if (r.success)
          order.status_list = r.data;
          // console.log(order);
      });
  }

  order.table_tpl_maker = function (item) {
    var product_list = JSON.parse(item.product);
    var product_snapshot = JSON.parse(item.snapshot).product;
    var product_tpl = '';
    var status_list_tpl = '';
    var sum = 0;

    product_list.forEach(function (product) {
      sum += product.price * product.count;
      // console.log(product);
      var title = product_snapshot
        .find(function (item) {
          return item.id == product.product_id
        })
        .title
        ;
      // console.log('title:', title);

      product_tpl += `<div>产品：${title}，数量：${product.count}</div>`
    });

    for (var key in order.status_list) {
      var status = order.status_list[key];
      status_list_tpl += `<option ${key == item.status ? 'selected' : ''} value="${key}">${status.name}</option>`;
    }

    return `
        <td>${item.order_num}</td>
        <td>¥ ${sum || '-'}</td>
        <td>${item.user.username}</td>
        <td class="product-list">${product_tpl}</td>
        <td>
          <button class="remove">删除</button>
          <select class="status-list">${status_list_tpl}</select>
        </td>
        `
  };

  order.on_render_table_item = function (el, row) {
    var me = this;

    el
      .querySelector('.remove')
      .addEventListener('click', function () {
        me.remove(row.id);
      })

    el.querySelector('.status-list')
      .addEventListener('change', function () {
        $.post('/api/order/update_status', { id: row.id, status: this.value })
          .then(function (r) {
            console.log(r);
            if (!r.success)
              alert('网络错误')
          })
      })
  }

  order.after_remove = function () {
    order.read();
  }

  // cat_api.after_read = function () {
  //   get_cat_selection();
  // }

  // function get_cat_selection() {
  //   cat_api.list_each(function (row) {
  //     var el = document.createElement('option');
  //     el.value = row.id;
  //     el.innerText = row.title;
  //     el_cat_list.appendChild(el);
  //   });
  // }

  function init() {
    order.read_status_list()
      .then(function () {
        order.read();
      })
  }

  init();
})();