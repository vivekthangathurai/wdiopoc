grunt.loadNpmTasks('grunt-webdriver');

module.exports = function(grunt) {
grunt.initConfig({
  default: {
    test: {
        configFile: './test/wdio.conf.js'
    }
  }
});

};
