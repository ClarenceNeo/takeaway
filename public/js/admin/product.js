; (function () {
  'use strict';

  var product = new Ui('product', '#list tbody', '#form');
  product.form_tpl_maker = function () {
    // return `
    //   <div class="form-item"><input name="id" type="text" hidden></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">标题：</span><input class="col col-9 form-input" name="title" type="text"></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">价格：</span><input class="col col-9 form-input" name="price" type="number"></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">销量：</span><input class="col col-9 form-input" name="sales" type="number"></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">配送费：</span><input class="col col-9 form-input" name="delivery_fee" type="number"></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">配送时间：</span><input class="col col-9 form-input" name="delivery_time" type="number"></div>
    //   <div class="form-item row"><span class="col col-3 tar form-name">封面：</span><input class="col col-9 form-input" name="cover_path" type="file"></div>
    //   <div class="form-item tac"> <button class="form-btn" type="submit">提交</button></div>
    // `;

    return `
      <div class="form-item"><input name="id" type="text" hidden></div>
      <div class="form-item row"><span class="col col-3 tar form-name">标题：</span><input class="col col-9 form-input" name="title" type="text"></div>
      <div class="form-item row"><span class="col col-3 tar form-name">价格：</span><input class="col col-9 form-input" name="price" type="number"></div>
      <div class="form-item row"><span class="col col-3 tar form-name">封面：</span><input class="col col-9 form-input" name="cover" type="file" placeholder="cover"></div>
      <div class="form-item tac"> <button class="form-btn" type="submit">提交</button></div>
    `;
  }
  product.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.sales}</td>
      <td>${item['delivery_fee']}</td>
      <td>${item['delivery_time']}</td>
      <td>${item['cover_path']}</td>
    `;
  }
  product.init();
  product.read();
})();