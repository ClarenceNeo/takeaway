; (function () {
  'use strict';

  var product = new Ui('product', '#list tbody', '#form');
  product.handle = true;
  var cat_api = new Model('cat');

  product.form_tpl_maker = function () {
    return `
      <label><input name="id" type="text" hidden></label>
      <label class="title">标题：</span><input class="col col-9 form-input" name="title" type="text"></label>
      <label class="title">分类：</span><select class="col col-9 form-input" id="cat-list" name="cat_id"></select></label>
      <label class="title">价格：</span><input class="col col-9 form-input" name="price" type="number"></label>
      <label class="title">销量：</span><input class="col col-9 form-input" name="sales" type="number"></label>
      <label class="title">封面：</span><input class="col col-9 form-input" name="cover_path" type="file" placeholder="cover"></label>
      <div class="btn-box"><button class="form-btn submit-btn" type="submit">提交</button><div>
    `;
  }
  product.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.cat_id}</td>
      <td>${item.price}</td>
      <td>${item.sales}</td>
      <td class="cover"><img src="/upload/${item['cover_path']}" alt=""></td>
    `;
  }

  cat_api.after_read = function () {
    var el_cat_list = document.getElementById('cat-list');
    get_cat_selection(el_cat_list);
  }

  function get_cat_selection(el_list) {
    el_list.innerHTML = '';
    cat_api.list_each(function (row) {
      var el = document.createElement('option');
      el.value = row.id;
      el.innerText = row.title;
      el_list.appendChild(el);
    });
  }

  product.after_read = function () {
    this.render();
    cat_api.read();
  }

  product.init();
  product.read();
})();