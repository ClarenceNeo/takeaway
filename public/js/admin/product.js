; (function () {
  'use strict';

  var product = new Ui('product', '#form', '#list tbody');
  product.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.price}</td>
    `;
  }
  product.read();
})();