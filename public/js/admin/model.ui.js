;(function(){
  'use strict';
  window.Ui = Ui;

  function Ui(name, form_selector, table_selector){
    Model.call(this, name);
    this.el_form = document.querySelector(form_selector);
    this.el_table = document.querySelector(table_selector);
    this.form_tpl_maker = null;
    this.table_tpl_maker = null;
    this.after_read = function(){
      this.render();
    }

    this.render = function() {
      
      var me = this;
      me.el_table.innerHTML = '';
      me.list_each(function(item) {
        var el = document.createElement('tr');
        el.innerHTML = me.table_tpl_maker(item);
        me.el_table.appendChild(el);
      });
    }
  }

  Ui.prototype = Object.create(Model.prototype);
  Ui.prototype.constructor = Ui;
  Ui.prototype.list_each = function(callback) {
    this.list.forEach(function(item, index) {
      callback(item, index);
    });
  };
})();