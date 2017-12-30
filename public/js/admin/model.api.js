;(function(){
  'use strict';

  window.Model = Model;

  function Model(name){
    this.name = name;
    this.page = 1;
    this.list = [];
    this.row;
  }

  Model.prototype.read = function () {
    var me = this;
    $.post('/api/' + this.name + '/read', {page: this.page})
      .then(function(r){
        me.list = r.data;
        if (me.after_read) {
          me.after_read();
        }
      })
  }

  Model.prototype.remove = function (id) {
    var me = this;
    if (!confirm('确定删除?')) {
      return;
    }

    $.post('/api/' + this.name + '/remove', {id: id})
      .then(function(){
        if (me.after_remove)
          me.after_remove();
      })
  }

  Model.prototype.add_change = function (param) {
    $.post('/api/' + this.name + '/add_or_change', param)
      .then(function (r) {
        console.log(r);
      })
  }

  Model.prototype.add = function () {
    var me = this;

    return $.ajax({
      url: '/api/' + this.name + '/add',
      method: 'post',
      data: me.row,
      cache: false,
      contentType: false,
      processData: false
    })
      .then(function (r) {
        if (r.success) {
          me.read();
        }
        // me.list = r.data;
        if (me.after_add)
          me.after_add();

        return r;
      })

  }
})();