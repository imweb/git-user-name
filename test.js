/*!
 * git-user-name <https://github.com/jonschlinkert/git-user-name>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var assert = require('assert');
var name = require('./');

describe('name', function() {
  it('should return the name from git config:', function() {
    assert(name() === 'jonschlinkert');
  });
});
