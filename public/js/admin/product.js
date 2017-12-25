; (function () {
  'use strict';

  var product = new Ui('product', '#list tbody', '#form');
  product.form_tpl_maker = function () {
    return `
      <label><input name="id" type="text" hidden></label>
      <label>标题：<input name="title" type="text"></label>
      <label>价格：<input name="price" type="text"></label>
      <label>销量：<input name="sales" type="text"></label>
      <button type="submit">提交</button>
    `;
  }
  product.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
    `;
  }
  product.init();
  product.read();
})();