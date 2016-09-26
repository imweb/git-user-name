/*!
 * git-user-name <https://github.com/imweb/git-user-name>
 */

var isObject = require('isobject');
var gitPath = require('git-config-path');
var parseConfig = require('parse-git-config');

module.exports = function (isGlobal) {
  var configPath = gitPath(isGlobal ? 'global' : undefined);
  var config = parseConfig.sync({
    cwd: '/',
    path: configPath
  });

  if (!isObject(config) || !isObject(config.user)) {
    return null;
  }

  return config.user.name;
};
