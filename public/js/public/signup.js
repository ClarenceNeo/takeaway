;(function(){
  'use strict';

  var el_form = document.querySelector('#signup');

  init();

  function init() {
    el_form.addEventListener('submit', function(e) {
      e.preventDefault();

      $.ajax({
        url: '/api/user/signup',
        method: 'post',
        data: el_form.get_data(),
        cache: false,
        contentType: false,
        processData: false
      })
        .then(function (r) {
          if (r.success) {
            location.href = '/user/login';
          }
        })

      // $.post('/api/user/signup', el_form.get_data())
      //   .then(function(r) {
      //     console.log(r);
      //   })
    })
  }


})();