; (function () {
  'use strict';

  var el_form = document.querySelector('form');

  init();

  function init() {
    el_form.addEventListener('submit', function (e) {
      e.preventDefault();

      $.ajax({
        url: '/api/user/login',
        method: 'post',
        data: el_form.get_data(),
        cache: false,
        contentType: false,
        processData: false
      })
        .then(function (r) {
          if (r.success) {
            location.href = '/';
          }
        })

      // $.post('/api/user/login', el_form.get_data())
      //   .then(function () {
      //     
      //   }, function () {
      //     alert('用户名或密码有误');
      //   })
    })
  }

})();