'use strict';

jest
  .dontMock('jquery')
  .dontMock('../src/js/set-position');

describe('beside', () => {
  var setPosition = require('../src/js/set-position');
  var dom = require('../src/js/dom');

  beforeEach(() => {
    document.body.innerHTML = '<div id="me">ME</div><div id="you">YOU</div>';
    var options = {
      me: document.getElementById('me'),
      you: document.getElementById('you'),
      where: 'top center',
      offset: '10px 0'
    };

    var $you = document.getElementById('you');
    setPosition(options, $you);
  });

  it('setPosition should be called', () => {
    expect(dom.css).toBeCalled();
  });

});
