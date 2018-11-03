'use strict';

var NOAH = NOAH || {};

// Requirements
var bs        = require('browser-sync').create();
var app       = require('../../assemblefile');
var extname   = require('gulp-extname');
var filePaths = require('../modules/file-paths').filePaths;

// Custom Tasks
NOAH.serve  = require('../modules/browser-sync').NOAH;
NOAH.sass   = require('../modules/sass').NOAH;
NOAH.concat = require('../modules/concat').NOAH;
NOAH.uglify = require('../modules/uglify').NOAH;
NOAH.test   = require('../modules/karma').NOAH;

NOAH.serve({
    notify: false,
    open: false,
    files: [
      './dist/css/*.css', 
      './dist/js/*.js',
      './dist/*.html'
    ],
    server: {
        baseDir: './dist'
    }
});

// Watch Sass files
bs.watch('source/scss/**/*.scss', function(event, file) {
    if (event === 'change') {
      NOAH.sass({
          src : 'source/scss/example.scss',
          dest: 'dist/css/example.css'
      });
    }
});

// Watch JS files
bs.watch('source/js/**/*.js', function(event, file) {
    var filename = file.replace(/^.*[\\\/]/, '').replace(/\..+$/, '');
    if (event === 'change') {
        NOAH.test({
            files: [
                'source/vendor/**/*.js',
                'source/js/*.js',
                'test/js/' + filename + '.test.js'
            ],
            singlerun: false
        });
        NOAH.concat({
            src : filePaths('source/js/'),
            dest: 'dist/js/example.js'
        });
        NOAH.uglify({
            src : 'dist/js/example.js',
            dest: 'dist/js/example.min.js'
        });
    }
});

// Watch HBS files
bs.watch('source/templates/**/*.hbs', function(event, file) {
    if (event === 'change') {
      app.file(file);
    }
});