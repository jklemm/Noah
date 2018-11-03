'use strict';

var NOAH = NOAH || {};

// Requirements
NOAH.test = require('../modules/karma').NOAH;

NOAH.test({
    files: [
        'source/vendor/**/*.js',
        'source/js/*.js',
        'test/js/*.test.js'
    ],
    singlerun: true
});