'use strict';

var NOAH = NOAH || {};

// Requirements
var filePaths = require('../modules/file-paths').filePaths;
NOAH.concat   = require('../modules/concat').NOAH;

NOAH.concat({
    src : filePaths('source/js/'),
    dest: 'dist/js/example.js'
});

NOAH.concat({
    src : filePaths('source/vendor/css/'),
    dest: 'dist/css/vendor.css'
});

NOAH.concat({
    src : filePaths('source/vendor/js/'),
    dest: 'dist/js/vendor.js'
});
