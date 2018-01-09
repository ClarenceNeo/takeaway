;(function(){
  'use strict';

  DOMTokenList.prototype.adds = function (tokens) {
    tokens.split(" ").forEach(function (token) {
      this.add(token);
    }.bind(this));
    return this;
  };

  HTMLFormElement.prototype.get_data = function () {
    var input_list = this.querySelectorAll('[name]');
    var form_data = new FormData(this);
    input_list.forEach(function (input) {
      if (input.type == 'file') {
        var file = input.files[0];
        form_data.append(input.name, file);
      } else
        form_data.append(input.name, input.value);
    });
    return form_data;
  };

  HTMLFormElement.prototype.set_data = function (row) {
    var me = this;
    var input_list = me.querySelectorAll('[name]');
    input_list.forEach(function (input) {
      var name = input.name;
      var new_val = row[name];
      if (new_val === undefined)
        return;

      switch (input.nodeName) {
        case 'INPUT':
          switch (input.type) {
            case 'text':
            case 'number':
            case 'email':
            case 'url':
            case 'search':
              input.value = new_val;
              break;
            case 'checkbox':
              input.checked = row[input.name][input.value];
              break;
            case 'radio':
              input.checked = input.value == new_val;
              break;
            case 'file':
              var holder;

              holder = me.$holder;
              if (!holder) {
                parent = me.querySelector('.cover_img');
                holder = me.$holder = document.createElement('a');
                holder.classList.add('cover-img-upload')
                parent.insertBefore(holder, input);
                holder.addEventListener('click', function () {
                  // holder.hidden = true;
                  holder.style.display = 'none';
                  input.hidden = false;
                });
              }
              input.hidden = true;
              // holder.hidden = false;
              holder.style.display = 'inline-block';
              // console.log(holder);
              // holder.innerHTML = '已上传文件：' + new_val + '，点击修改';
              holder.innerHTML = `
                <img src="/upload/${new_val}">
              `;
              break;
          }
          break;
        case 'SELECT':
          input.value = new_val;
          break;
      }

    });
    return
  }

  HTMLFormElement.prototype.$reset = function () {
    var me = this;
    me
      .querySelectorAll('[name]')
      .forEach(function (input) {
        input.value = '';
        if (input.type == 'file') {
          input.hidden = false;
          me.$holder.hidden = true;
        }
      })
  }
})();