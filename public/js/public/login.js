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
            // me.read();
            location.href = '/';
          }
          // me.list = r.data;
          // if (me.after_add)
          //   me.after_add();

          // return r;
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