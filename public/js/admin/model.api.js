;(function(){
  'use strict';

  window.Model = Model;

  function Model(name){
    this.name = name;
    this.page = 1;
    this.list = [];
  }

  Model.prototype.read = function () {
    $.post('/api/' + this.name + '/read', {page: this.page})
      .then(function(r){
        this.list = r.data;
        if (this.after_read) {
          this.after_read();
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

  Model.prototype.add_update = function (param) {
    $.post('/api/' + this.name + '/add', param)
      .then(function (r) {
        console.log(r);
      })
  }
})();