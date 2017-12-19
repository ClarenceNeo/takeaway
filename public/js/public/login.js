; (function () {
  'use strict';

  var el_form = document.querySelector('form');

  init();

  function init() {
    el_form.addEventListener('submit', function (e) {
      e.preventDefault();
      $.post('/api/user/login', el_form.get_data())
        .then(function () {
          location.href = '/';
        }, function () {
          alert('用户名或密码有误');
        })
    })
  }

})();