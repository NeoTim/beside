'use strict';

jest
  .dontMock('../src/js/event')
  .dontMock('jquery');

describe('event', function() {
  var event = require('../src/js/event');
  var $ = require('jquery');

  var buttonStr = '<button id="button" class="button" style="position: absolute;">';
  var $button;

  beforeEach(function() {
    document.body.innerHTML = buttonStr;
    $button = document.getElementById('button');
  });

  it('can bind event to element', function() {
    var count = 0;
    event.bind($button, 'click', function(e) {
      count++;
    });

    $('#button').click();
    expect(count).toBe(1);
  });

  it('can unbind event to element', function() {
    var count = 0;
    event.bind($button, 'click', function(e) {
      count++;
    });

    $('#button').click();
    expect(count).toBe(1);

    event.unbind($button, 'click', function(e) {
      count++;
      $('#button').click();
      expect(count).toBe(1);
    });

  });

  it('can bind once event to element', function() {
    var count = 0;
    event.once($button, 'click', function(e) {
      count++;
    });

    $('#button').click();
    expect(count).toBe(1);

    $('#button').click();
    expect(count).toBe(1);
  });

});
