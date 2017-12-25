; (function () {
  'use strict';

  window.Model = Model;

  function Model(name) {
    this.name = name;
    this.page = 1;
    this.list = [];
  }

  Model.prototype.read = function () {
    var me = this;
    $.post('/api/' + this.name + '/read', { page: this.page })
      .then(function (r) {
        me.list = r.data;
        if (me.after_read) {
          me.after_read();
        }
      })
  }

  Model.prototype.add_cart = function(id) {
    $.post('/api/' + this.name + '/add_cart', {product_id: id})
      .then(function(r){
        console.log(r);
      })
  }
  
})();