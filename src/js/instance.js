'use strict';

var dom = require('./dom');
var event = require('./event');

module.exports = {
  init: function(options) {
    var $me = options.me;
    var $you = options.you;
    var $body = document.body;

    function setPosition() {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');

      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;
      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;

      var rectYou = $you.getBoundingClientRect();

      var rectMe = $me.getBoundingClientRect();

      var documentMarginTop = dom.css(document.documentElement, 'margin-top');
      var documentMarginLeft = dom.css(document.documentElement, 'margin-left');
      var documentPaddingTop = dom.css(document.documentElement, 'padding-top');

      var bodyMarginTop = dom.css(document.body, 'margin-top');
      var bodyMarginLeft = dom.css(document.body, 'margin-left');
      var bodyPaddingTop = dom.css(document.body, 'padding-top');

      var top = rectMe.top + y - documentMarginTop - bodyMarginTop - documentPaddingTop;
      var left = rectMe.left + x - bodyMarginLeft - documentMarginLeft - bodyPaddingTop;

      switch (options.where) {
        case 'top center':
          top = top - rectYou.height;
          left = left - rectYou.width / 2 + rectMe.width / 2;
          break;
        case 'top left':
          top = top - rectYou.height;
          break;
        case 'top right':
          top = top - rectYou.height;
          left = left - rectYou.width + rectMe.width;
          break;

        case 'bottom center':
          top = top + rectMe.height;
          left = left - rectYou.width / 2 + rectMe.width / 2;
          break;
        case 'bottom left':
          top = top + rectMe.height;
          break;
        case 'bottom right':
          top = top + rectMe.height;
          left = left - rectYou.width + rectMe.width;
          break;

        case 'left center':
          top = top - rectYou.height / 2 + rectMe.height / 2;
          left = left - rectYou.width;
          break;
        case 'left top':
          left = left - rectYou.width;
          break;
        case 'left bottom':
          top = top - rectYou.height + rectMe.height;
          left = left - rectYou.width;
          break;

        case 'right center':
          top = top - rectYou.height / 2 + rectMe.height / 2;
          left = left + rectMe.width;
          break;
        case 'right top':
          left = left + rectMe.width;
          break;
        case 'right bottom':
          top = top - rectYou.height + rectMe.height;
          left = left + rectMe.width;
          break;
        default:
          break;
      }

      dom.css($you, {
        position: 'absolute',
        top: top + 'px',
        left: left + 'px',
        opacity: 1
      });
    }

    setPosition();
    $body.appendChild($you);

    event.bind(window, 'resize', function() {
      setPosition();
    });
  }
};
