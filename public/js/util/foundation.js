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
})();