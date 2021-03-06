; (function () {
  'use strict';
  window.Ui = Ui;

  function Ui(name, list_selector, list_class) {
    Model.call(this, name);
    this.el_list = document.querySelector(list_selector);
    this.list_tpl_maker = null;
    this.list_tpl_class = list_class;
    this.after_read = function () {
      this.render();
    }

    this.render = function () {

      var me = this;
      render_list(me);
      if(this.after_render_list){
        this.after_render_list();
      }
    }
  }

  Ui.prototype = Object.create(Model.prototype);
  Ui.prototype.constructor = Ui;
  Ui.prototype.list_each = function (callback) {
    this.list.forEach(function (item, index) {
      callback(item, index);
    });
  };

  function render_list(me) {
    me.el_list.innerHTML = '';
    me.list_each(function (item) {
      var el = document.createElement('div');
      if (me.list_tpl_class) {
        el.classList.adds(me.list_tpl_class)
      }else{
        el.classList.add('item');
      }
      el.innerHTML = me.list_tpl_maker(item);

      if (me.after_render) {
        me.after_render(el,item);
      }
      me.el_list.appendChild(el);
    });
  }

})();