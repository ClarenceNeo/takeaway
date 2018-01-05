;(function(){

  'use strict';
  ; (function () {
    'use strict';
    var user = new Ui('user', '#list tbody');
    user.handle = true;

    user.table_tpl_maker = function (item) {
      return `
        <td>${item.id}</td>
        <td>${item.username}</td>
        `
    };

    user.after_remove = function () {
      user.read();
    }

    function init() {
      user.read();
    }

    init();
  })();
})();