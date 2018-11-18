'use strict';

var gulp = require('gulp');
var ARDcoreTasks = require('ARDcore-build');

ARDcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
