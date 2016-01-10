'use strict';

var instance = require('./instance')

module.exports = {
  init: init
};

function init(options) {
  var i = Object.create(instance);
  i.init(options);
}
