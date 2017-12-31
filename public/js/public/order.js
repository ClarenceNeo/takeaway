;(function () {
  'use strict';
  var order = new Model('order');
  var el_table = document.querySelector('#order-table');
  // console.log(el_table);

  order.read();

  order.after_read = function () {
    el_table.innerHTML = '';
    var thead = document.createElement("thead");
    thead.innerHTML = `
      <tr>
        <th>订单详情</th>
        <th>收货人</th>
        <th>金额</th>
        <th>订单状态</th>
        <th>操作</th>
      </tr>
    `;
    
    el_table.appendChild(thead);
    
    var length = this.list.length;

    for (let i = 0; i < length; i++) {
      var item = this.list[i];
      var product = JSON.parse(item.product);
      console.log();
      var tbody = document.createElement("tbody");
      var amount = 0;
      product.forEach(function (item) {
        amount+=item.price*item.count
      })
      tbody.innerHTML = `
        <tr class="sep-row">
          <td colspan="5"></td>
        </tr>
        <tr class="tr-th tb-head">
          <td colspan="5">
            <span class="dealtime">2017-12-22 19:13:27</span>
            <span>订单号：<a id="order-num">${item.order_num}</a></span>
            <div class="remove-order"><i class="fa fa-trash-o" aria-hidden="true"></i></div>
          </td>
        </tr>
        <tr class="tr-bd">
          <td rowspan="${product.length}">
            <div class="consignee tac">
              <span>user3</span>
            </div>
          </td>
          <td rowspan="${product.length}">
            <div class="amount tac">
              <span>总额 ¥${amount}</span>
            </div>
          </td>
          <td rowspan="${product.length}">
            <div class="status tac">
              <span>已完成</span>
            </div>
          </td>
          <td rowspan="${product.length}">
            <div>
              <button>支付</button>
            </div>
            <a href="">评价</a>
          </td>
        </tr>
      `;

      // console.log(product);

      for (let j = 0; j < product.length; j++) {
        var good = product[j];
        if (j === 0) {
          var sub = document.createElement('td');
          sub.classList.add('goods','row');
          var title = unescape(good.title.replace(/u/g, '%u'));
          sub.innerHTML = `
            <div class="goods-item col col-10">
              <div class="p-img"><img src="https://fuss10.elemecdn.com/0/8d/d847f56880bab0af0b927c8356f8epng.png?imageMogr2/thumbnail/140x140" alt=""></div>
              <div class="p-msg">${title}</div>
            </div>
            <div class="goods-number col col-2 tac">x${good.count}</div>
          `;
          var tb = tbody.querySelector('.tr-bd');
          tb.insertBefore(sub, tb.firstChild);
          continue;
        }
        var title = unescape(good.title.replace(/u/g, '%u'));
        var other = document.createElement('tr');
        other.innerHTML = `
          <td class="goods row">
            <div class="goods-item col col-10">
              <div class="p-img"><img src="https://fuss10.elemecdn.com/e/53/3bcbafc27f4f11e59c0caa3d84ac9jpeg.jpeg?imageMogr2/thumbnail/720x720/format/webp/quality/85" alt=""></div>
              <div class="p-msg">${title}</div>
            </div>
            <div class="goods-number col col-2 tac">x${good.count}</div>
          </td>
        `;
        tbody.appendChild(other);
      }

      el_table.appendChild(tbody);
    }
    // this.list.forEach(function (item) {
    //   var tbody = document.createElement("tbody");
    //   var arr = JSON.parse(item.product);

    //   console.log(arr);
    //   // arr.forEach(function (item) {
    //   //   console.log(unescape(item.title.replace(/u/g, '%u')));
    //   // })
    // })
  }
})();