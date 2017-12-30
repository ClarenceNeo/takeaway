; (function () {
  'use strict';

  window.Model = Model;

  function Model(name) {
    this.name = name;
    this.page = 1;
    this.list = [];
    this.count = 0;
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

  Model.prototype.add = function (param) {
    $.post('/api/' + this.name + '/add', param)
      .then(function (r) {
        if(this.after_add)
          this.after_add();
      }.bind(this))
  }

  // Model.prototype.add_cart = function(id) {
  //   var me = this;
  //   $.post('/api/' + this.name + '/add_cart', {product_id: id})
  //     .then(function(r){
  //       if (me.after_add_cart) {
  //         me.after_add_cart();
  //       }
  //     })
  // }

  // Model.prototype.reduce_cart = function(row) {
  //   $.post('/api/' + this.name + '/reduce_cart', row)
  //     .then(function(r) {
  //       if (this.after_reduce_cart) {
  //         this.after_reduce_cart();
  //       }
  //     }.bind(this))
  // }

  Model.prototype.read_cart = function() {
    $.post('/api/' + this.name + '/read_cart')
      .then(function(r){
        this.list = r.data.list;
        this.count = r.data.count;
        if (this.after_read_cart) {
          this.after_read_cart();
        }
      }.bind(this));
  }

  Model.prototype.add_or_update = function(row) {
    $.post('/api/cart/add_or_update', row)
      .then(function (r) {
        if (this.after_add_or_update) {
          this.after_add_or_update();
        }
      }.bind(this));
  }
  
})();