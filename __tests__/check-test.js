'use strict';

jest.dontMock('../src/js/check');

describe('event', function() {
  var check = require('../src/js/check');

  it('check offset', function() {
    expect(() => check.offset('10px -10px')).not.toThrow();
    expect(() => check.offset('10px')).toThrow();
    expect(() => check.offset('10px 10px 0')).toThrow();
    expect(() => check.offset('abcpx 10px')).toThrow();
  });

  it('check where', function() {
    expect(() => check.where('top center')).not.toThrow();
    expect(check.where).toThrow();
    expect(() => check.where('')).toThrow();
    expect(() => check.where('top')).toThrow();
    expect(() => check.where('top left hello world')).toThrow();
  });
});
