;(function(){
  'use strict';

  var el_form = document.querySelector('#signup');

  init();

  function init() {
    el_form.addEventListener('submit', function(e) {
      e.preventDefault();
      $.post('/api/user/signup', el_form.get_data())
        .then(function(r) {
          console.log(r);
        })
    })
  }


})();