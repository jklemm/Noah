'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.sass = require('../modules/sass').NOAH;

// Expanded
NOAH.sass({
    src : 'source/scss/example.scss',
    dest: 'dist/css/example.css'
});

// Minified
NOAH.sass({
    src  : 'source/scss/example.scss',
    dest : 'dist/css/example.min.css',
    style: 'compressed'
});