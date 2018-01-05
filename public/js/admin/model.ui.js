;(function(){
  'use strict';
  window.Ui = Ui;

  function Ui(name, table_selector, form_selector){
    Model.call(this, name);
    this.el_form = document.querySelector(form_selector);
    this.el_table = document.querySelector(table_selector);
    this.form_tpl_maker = null;
    this.table_tpl_maker = null;
    this.handle = false;
    this.after_read = function(){
      this.render();
    }

    this.init = function() {
      var me = this;
      render_form(me);
      bind_form(me);
    }

    this.render = function() {
      
      var me = this;
      render_table(me);
    }
  }

  Ui.prototype = Object.create(Model.prototype);
  Ui.prototype.constructor = Ui;
  // Ui.prototype.list_each = function(callback) {
  //   this.list.forEach(function(item, index) {
  //     callback(item, index);
  //   });
  // };

  function render_table(me){
    me.el_table.innerHTML = '';
    me.list_each(function (item) {
      var el = document.createElement('tr');
      el.innerHTML = me.table_tpl_maker(item);
      if (me.handle) {
        var handle = document.createElement('td');
        handle.innerHTML = '<td><button class="update">更新</button><button class="remove">删除</button></td>';
        el.appendChild(handle);
        bind_table_item(el, item, me);
      }
      if (me.on_render_table_item)
        me.on_render_table_item(el, item);
      me.el_table.appendChild(el);
    });
  }

  function render_form(me){
    me.el_form.innerHTML = '';
    me.el_form.innerHTML = me.form_tpl_maker();
  }

  function bind_form(me){
    me.el_form.addEventListener('submit', function(e){
      e.preventDefault();
      // var data = get_form_data(me.el_form);
      me.row = this.get_data();
      // me.el_form.$reset();
      me.add()
      .then(function (r) {
        if (r.success)
          me.el_form.$reset();
      });
      // me.read();
    });
  }

  function bind_table_item(el, data, me){
    var update = el.querySelector('.update');
    var remove = el.querySelector('.remove');
    update.addEventListener('click', function() {
      // set_form_data(me.el_form, data);
      me.el_form.set_data(data);
    });
    remove.addEventListener('click', function () {
      me.remove(data.id);
      me.read();
    });
  }

  function get_form_data(form){
    var list = form.querySelectorAll('[name]');
    var obj = {};
    list.forEach(function (input) {
      obj[input.name] = input.value;
    })
    return obj;
  }

})();