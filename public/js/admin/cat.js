;(function(){
  'use strict';

  var cat = new Ui('cat', '#list tbody', '#form');
  cat.handle = true;
  cat.table_tpl_maker = function (item) {
    return `
      <td>${item.id}</td>
      <td>${item.title}</td>
    `;
  }
  cat.form_tpl_maker = function(item) {
    return `
      <label><input name="id" type="text" hidden></label>
      <label class="title">标题：<input name="title" type="text"></label>
      <div class="btn-box"><button type="submit" class="submit-btn">提交</button><div>
    `;
  }
  cat.init();
  cat.read();
})();