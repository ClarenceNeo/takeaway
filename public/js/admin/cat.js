;(function(){
  'use strict';

  var cat = new Ui('cat', '#form', '#list tbody');
  cat.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
    `;
  }
  cat.read();
})();