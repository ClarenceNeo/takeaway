; (function () {
  'use strict';

  var product = new Ui('product', '#list tbody', '#form');
  product.handle = true;
  var cat_api = new Model('cat');

  product.form_tpl_maker = function () {
    return `
      <div class="form-item"><input name="id" type="text" hidden></div>
      <div class="form-item row"><span class="col col-3 tar form-name">标题：</span><input class="col col-9 form-input" name="title" type="text"></div>
      <div class="form-item row"><span class="col col-3 tar form-name">分类：</span><select class="col col-9 form-input" id="cat-list" name="cat_id"></select></div>
      <div class="form-item row"><span class="col col-3 tar form-name">价格：</span><input class="col col-9 form-input" name="price" type="number"></div>
      <div class="form-item row"><span class="col col-3 tar form-name">销量：</span><input class="col col-9 form-input" name="sales" type="number"></div>
      <div class="form-item row"><span class="col col-3 tar form-name">封面：</span><input class="col col-9 form-input" name="cover" type="file" placeholder="cover"></div>
      <div class="form-item tac"> <button class="form-btn" type="submit">提交</button></div>
    `;
  }
  product.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.cat_id}</td>
      <td>${item.price}</td>
      <td>${item.sales}</td>
      <td>${item['cover_path']}</td>
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