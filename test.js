'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var name = require('./');
var gitPath = require('git-config-path')();

describe('name', function() {
  it('should return the name from git config:', function(cb) {
    fs.stat(gitPath, function(err) {
      if (err) return cb();
      assert.equal(name(), 'coolriver');
      cb();
    });
  });
});
