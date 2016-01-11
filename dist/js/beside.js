(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var instance = require('./instance');

module.exports = {
  init: init
};

function init(options) {
  var i = Object.create(instance);
  i.init(options);
}

},{"./instance":5}],2:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var beside = require('./beside');

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
    window.beside = factory();
  }
})(function () {

  return beside;
});

},{"./beside":1}],3:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function getCss(element, styleName) {
  var styleValue = window.getComputedStyle(element)[styleName];
  if (parseInt(styleValue, 10) || parseInt(styleValue, 10) === 0) {
    styleValue = parseInt(styleValue, 10);
  }

  return styleValue;
}

function setSingleCss(element, styleName, styleValue) {
  if (typeof styleValue === 'number') {
    styleValue = styleValue.toString() + 'px';
  }

  element.style[styleName] = styleValue;
  return element;
}

function setMultiCss(element, obj) {
  for (var key in obj) {
    var styleValue = obj[key];
    if (typeof styleValue === 'number') {
      styleValue = styleValue.toString() + 'px';
    }

    element.style[key] = styleValue;
  }

  return element;
}

var dom = {
  createElement: function createElement(string) {
    var element = document.createElement('div');
    element.innerHTML = string;
    return element.firstElementChild;
  },
  appendTo: function appendTo(child, parent) {
    parent.appendChild(child);
  },
  addClass: function addClass(element, className) {
    var classes = element.className.split(' ');
    if (classes.indexOf(className) < 0) {
      classes.push(className);
    }

    element.className = classes.join(' ');
    return element;
  },
  removeClass: function removeClass(element, className) {
    var classes = element.className.split(' ');
    var index = classes.indexOf(className);
    if (index > -1) {
      classes.splice(index, 1);
    }

    element.className = classes.join(' ');
    return element;
  },
  css: function css(element, styleNameOrObject, styleValue) {
    if ((typeof styleNameOrObject === 'undefined' ? 'undefined' : _typeof(styleNameOrObject)) === 'object') {
      return setMultiCss(element, styleNameOrObject);
    } else {
      if (typeof styleValue === 'undefined') {
        return getCss(element, styleNameOrObject);
      } else {
        return setSingleCss(element, styleNameOrObject, styleValue);
      }
    }
  }
};

module.exports = dom;

},{}],4:[function(require,module,exports){
'use strict';

var event = {
  bind: function bind(element, name, listener) {
    element.addEventListener(name, listener, false);
  },
  unbind: function unbind(element, name, listener) {
    element.removeEventListener(name, listener, false);
  },
  once: function once(element, name, listener) {
    var that = this;
    var once = function once(e) {
      that.unbind(element, name, once);
      listener(e);
    };

    that.bind(element, name, once);
  }
};

module.exports = event;

},{}],5:[function(require,module,exports){
'use strict';

var dom = require('./dom');
var event = require('./event');

module.exports = {
  init: function init(options) {
    var $me = options.me;
    var $you = options.you;

    function setPosition() {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || '') === 'CSS1Compat';

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
          left = left - rectMe.width;

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
        left: left + 'px'
      });
    }

    setPosition();
    var $body = document.body;
    $body.appendChild($you);

    event.bind(window, 'resize', function () {
      setPosition();
    });
  }
};

},{"./dom":3,"./event":4}]},{},[2]);
