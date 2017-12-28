;(function(){
  'use strict';

  DOMTokenList.prototype.adds = function (tokens) {
    tokens.split(" ").forEach(function (token) {
      this.add(token);
    }.bind(this));
    return this;
  };

  HTMLFormElement.prototype.get_data = function(){
    var input_list = this.querySelectorAll('[name]');
    var data = {};
    input_list.forEach(function (input) {
      data[input.name] = input.value;
    });
    return data;
  }
})();