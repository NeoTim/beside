'use strict';

var dom = require('./dom');
var event = require('./event');
var check = require('./check');
var you = require('./you');

module.exports = {
  init: function(options) {
    options.offset = options.offset || '0 0'; // default value

    check.offset(options.offset);
    check.where(options.where);

    var $you = options.you;
    var $body = document.body;

    setPosition();

    $body.appendChild($you);

    event.bind(window, 'scroll', function() {
      // TODO
      // console.log('scroll');
    });

    event.bind(window, 'resize', function() {
      setPosition();
    });

    // ////////////////////
    function setPosition() {
      var boxYou = Object.create(you);
      boxYou.init(options);

      dom.css($you, {
        position: 'absolute',
        top: boxYou.top + 'px',
        left: boxYou.left + 'px',
        opacity: 1
      });
    }
  }
};
