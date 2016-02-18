'use strict';

var event = require('./event');
var check = require('./check');
var setPosition = require('./set-position');

module.exports = {
  init: function (options) {
    options.offset = options.offset || '0 0'; // default value

    check.offset(options.offset);
    check.where(options.where);

    var $you = options.you;
    var $body = document.body;

    setPosition(options, $you);

    $body.appendChild($you);

    event.bind(window, 'resize', function () {
      setPosition(options, $you);
    });
  }
};
