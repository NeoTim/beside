'use strict';

jest
  .dontMock('../src/js/instance');

describe('beside', function() {
  var instance = require('../src/js/instance');
  var check = require('../src/js/check');
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

});
