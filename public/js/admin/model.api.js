;(function(){
  'use strict';

  window.Model = Model;

  function Model(name){
    this.name = name;
    this.page = 1;
    this.list = [];
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
    if (!confirm('确定删除?')) {
      return;
    }

    $.post('/api/' + this.name + '/remove', {id: id})
      .then(function(){
        if (this.after_remove())
          this.after_remove();
      })
  }

  Model.prototype.add_change = function (param) {
    $.post('/api/' + this.name + '/add_or_change', param)
      .then(function (r) {
        console.log(r);
      })
  }
})();