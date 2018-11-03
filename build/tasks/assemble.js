/**
 * assemblefile.js
 *
 * Compiles Handlebars templates
 */
var path     = require('path');
var helpers  = require('handlebars-helpers');
var repeat   = require('handlebars-helper-repeat');
var extname  = require('gulp-extname');
var assemble = require('assemble');

var app = assemble({
    layout: 'core.hbs'
});

// Set the source directory
app.data('source', '../');

// Register handlebars helpers
app.helpers(helpers());
app.helper('repeat', repeat);

app.file = function(file) {
  app.partials('source/templates/partials/**/*.hbs');
  app.layouts('source/templates/layouts/**/*.hbs');
  app.src(file)
    .pipe(app.renderFile('hbs'))
    .pipe(extname('.html'))
    .pipe(app.dest('dist/'));
}

app.task('app', function() {
  app.file('source/templates/pages/**/*.hbs');
});

module.exports = app;