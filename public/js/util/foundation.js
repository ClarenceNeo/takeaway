;(function(){
  'use strict';

  HTMLFormElement.prototype.get_data = function(){
    var input_list = this.querySelectorAll('[name]');
    var data = {};
    input_list.forEach(function (input) {
      data[input.name] = input.value;
    });
    return data;
  }
})();