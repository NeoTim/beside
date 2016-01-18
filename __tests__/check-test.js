'use strict';

jest.dontMock('../src/js/check');

describe('event', function() {
  var check = require('../src/js/check');

  beforeEach(function() {});

  it('check offset', function() {
    try {
      check.offset('10px -10px');
    } catch (err) {
      // nothing is normal
    }

    try {
      check.offset('10px');
    } catch (err) {
      // 'value offset invalid, you should set something like "-10px 0"'
      expect(err.toString()).toContain('value offset invalid');
    }

    try {
      check.offset('10px 10px 0');
    } catch (err) {
      expect(err.toString()).toContain('value offset invalid');
    }

    try {
      check.offset('abcpx 10px');
    } catch (err) {
      expect(err.toString()).toContain('value offset invalid');
    }

  });

  it('check where', function() {
    try {
      check.where('top center');
    } catch (err) {
      // nothing is normal
    }

    try {
      check.where();
    } catch (err) {
      expect(err.toString()).toContain('value where invalid');
    }

    try {
      check.where('');
    } catch (err) {
      expect(err.toString()).toContain('value where invalid');
    }

    try {
      check.where('top');
    } catch (err) {
      expect(err.toString()).toContain('value where invalid');
    }

    try {
      check.where('top left hello');
    } catch (err) {
      expect(err.toString()).toContain('value where invalid');
    }

  });
});
