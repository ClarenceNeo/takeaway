;(function(){
  'use strict';

  var cat = new Ui('cat', '#cat-list');

  cat.list_tpl_maker = function(item) {
    return `
      <a href="" class="cat-item">${item.title}</a>
    `;
  }
  cat.read();
})();