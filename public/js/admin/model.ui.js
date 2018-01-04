;(function(){
  'use strict';
  window.Ui = Ui;

  function Ui(name, table_selector, form_selector){
    Model.call(this, name);
    this.el_form = document.querySelector(form_selector);
    this.el_table = document.querySelector(table_selector);
    this.form_tpl_maker = null;
    this.table_tpl_maker = null;
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
      var handle = document.createElement('td');
      handle.innerHTML = '<td><button class="update">更新</button><button class="remove">删除</button></td>';
      el.innerHTML = me.table_tpl_maker(item);
      el.appendChild(handle);
      bind_table_item(el, item, me);
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
      clear_form(me.el_form);
      me.add();
      // me.read();
    });
  }

  function bind_table_item(el, data, me){
    var update = el.querySelector('.update');
    var remove = el.querySelector('.remove');
    update.addEventListener('click', function() {
      set_form_data(me.el_form, data);
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

  function set_form_data(form, data){
    for(var key in data){
      var value = data[key];
      var input_list = form.querySelectorAll(`[name=${key}]`);
      input_list.forEach(function (input) {
        /*如果是input类型是checkbox或radio*/
        if (input.type == 'checkbox' || input.type == 'radio') {
          /*检查input中预设的值是否在playing中*/
          if (value.indexOf(input.value) === -1) {
            /*如果不在就取消打钩*/
            input.checked = false;
          } else {
            /*如果在就打钩*/
            input.checked = true;
          }
        } else {
          /*如果是常规input，直接设置值*/
          input.value = value;
        }
      })
    }
  }

  function clear_form(form){
    var list = form.querySelectorAll('[name]');
    list.forEach(function (input) {
      if (input.type == 'checkbox' || input.type == 'radio')
        input.checked = false;
      else
        input.value = null;
    })
  }
})();