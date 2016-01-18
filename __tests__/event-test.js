'use strict';

jest
  .dontMock('../src/js/event')
  .dontMock('jquery');

describe('event', function() {
  var event = require('../src/js/event');
  var $ = require('jquery');
  var count = 0;

  var buttonStr = '<button id="button" class="button" style="position: absolute;">';
  var $button;

  beforeEach(function() {
    document.body.innerHTML = buttonStr;
    $button = document.getElementById('button');
  });

  it('can bind event to element', function() {
    event.bind($button, 'click', function(e) {
      count++;
    });

    $('#button').click();
    expect(count).toBe(1);
  });

});
