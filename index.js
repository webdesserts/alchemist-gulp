var Summary = require('gulp-summary');
var DefaultRegistry = require('undertaker-registry');
var inherits = require('util').inherits;

function PluginRegistry(config) {
  DefaultRegistry.call(this);
  this.config = config
}

inherits(PluginRegistry, DefaultRegistry)

PluginRegistry.prototype.init = function init(gulp) {
  var summary = new Summary(gulp)
  summary.configure(this.config)

  /*======*\
   *  Main  *
   \*======*/

  summary.define({
    command: 'default',
    description: 'test, lint, and build the project',
    task: require('./tasks/default')
  })

  summary.define({
    command: 'dev',
    description: 'test, lint, and build the project as you develop',
    task: require('./tasks/dev')
  })

  summary.define({
    command: 'build',
    description: 'build the project for both node and the browser',
    task: require('./tasks/build')
  })

  summary.define({
    command: 'test',
    description: 'run all tests',
    task: require('./tasks/test')
  })

  summary.define({
    command: 'lint',
    description: 'lint the entire project',
    task: require('./tasks/lint')
  })

  /*========*\
   *  Builds  *
   \*========*/

  summary.define({
    command: 'build:node',
    description: 'builds the plugin for node use (commonjs)',
    task: require('./tasks/build/node.js')
  })

  summary.define({
    command: 'build:browser',
    description: 'builds the plugin for browser use (umd)',
    task: require('./tasks/build/browser.js')
  })

  /*=======*\
   *  Watch  *
   \*=======*/

  summary.define({
    command: 'test:watch',
    description: 'test and watch for changes',
    task: require('./tasks/test/watch')
  })

  summary.define({
    command: 'lint:watch',
    description: 'lint and watch for changes',
    task: require('./tasks/lint/watch')
  })
}

module.exports = PluginRegistry;
