'use strict';

jest
  .dontMock('jquery')
  .dontMock('../src/js/instance');

describe('beside', function() {
  var $ = require('jquery');
  var instance = require('../src/js/instance');
  var check = require('../src/js/check');
  var setPosition = require('../src/js/set-position');
  var options;

  beforeEach(function() {
    document.body.innerHTML = '<div id="me">ME</div><div id="you">YOU</div>';
    options = {
      me: document.getElementById('me'),
      you: document.getElementById('you'),
      where: 'top center',
      offset: '10px 0'
    };

    var i = Object.create(instance);
    i.init(options);
  });

  it('check.offset should called', function() {
    expect(check.offset).toBeCalledWith(options.offset);
  });

  it('check.where should called', function() {
    expect(check.where).toBeCalledWith(options.where);
  });

  it('setPosition should be called', function() {
    expect(setPosition).toBeCalledWith(options, document.getElementById('you'));
  });

});
