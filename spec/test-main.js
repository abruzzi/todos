var tests = ['jasmine-jquery'];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/scripts',

    paths: {
        'jquery': 'lib/jquery-1.10.2',
        'underscore': 'lib/underscore-1.5.1.min',
        'jasmine-jquery': 'lib/jasmine-jquery'
    },

    shim: {
        'underscore': {
            exports: '_'
        },
        'jasmine-jquery': ['jquery']
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
