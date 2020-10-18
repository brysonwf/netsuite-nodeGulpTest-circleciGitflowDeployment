'use strict';

var gulp = require('gulp');
var fs = require('graceful-fs');
var path = require('path');
var standard = require('gulp-standard');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var Server = require('karma').Server;
var nscabinet = require('nscabinet');
var gitmodified = require('gulp-gitmodified');
var plumber = require('gulp-plumber');
var intercept = require('gulp-intercept');
var exec = require('child_process').exec;
var open = require('gulp-open');

gulp.task('karma', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).on('error', function (err) {
    throw err;
  }).start();
});

function getFolders(dir) {
  return fs.readdirSync(dir)
  .filter(function (file) {
    return fs.statSync(path.join(dir, file)).isDirectory();
  });
}

function getFiles(dir, files_) {
  files_ = files_ || [];
  var files = fs.readdirSync(dir);
  for (var i in files) {
    var name = dir + '/' + files[i];
    if (
      name.charAt(0) !== '.'
      && name.indexOf('.js') !== -1
    ) {
      if (fs.statSync(name).isDirectory()) {
        // getFiles(name, files_);
      } else {
        files_.push(name.replace(/\.[^/.]+$/, ""));
      }
    }
  }
  return files_;
}

var scriptsPath = '.';
var folders = getFolders(scriptsPath);

//stage  = lint all src files, break on error
gulp.task('buildFunction-ci', function () {
  var diffUrl = process.env.CIRCLE_COMPARE_URL.split('/');
  var diffUrlLength = diffUrl.length;
  var diffHash = diffUrl[diffUrlLength - 1]

  return folders.map(function (folder) {
    return gulp.src(scriptsPath + '/' + folder + '/src/*.js')
    .pipe(plumber())
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      quiet: true
    }))
    .pipe(concat(folder + '.js'))
    .pipe(gulp.dest(scriptsPath + '/' + folder + '/'))
    // .pipe(uglify())
    // .pipe(rename(folder + '.js'))
    // .pipe(gulp.dest(scriptsPath + '/' + folder + '/'))
    // .pipe(intercept(function (file) {
    //   exec('git diff --no-commit-id --name-only -r ' + diffHash + ' ' + scriptsPath + '/' + folder + '/', function (err, stdout, stderr) {
    //     if (stdout) {
    //       console.log('Trigger: ' + stdout);
    //       return gulp.src(stdout)
    //       // .pipe(nscabinet({
    //       //   email: 'testcircleci@test.com',
    //       //   password: process.env.SB1_PASSWORD,
    //       //   account: '',
    //       //   realm: 'sandbox.netsuite.com',
    //       //   role: 3,
    //       //   rootPath: '/SuiteScripts',
    //       //   script: ,
    //       //   deployment: 1
    //       // }));
    //     } else {
    //       return null;
    //     }
    //   });
    }));
  });
});

gulp.task('buildFunction-local', function () {
  return folders.map(function (folder) {
    return gulp.src(scriptsPath + '/' + folder + '/src/*.js')
    .pipe(plumber())
    .pipe(gitmodified('modified'))
    .pipe(standard())
    .pipe(standard.reporter('default', {
      breakOnError: false,
      quiet: true
    }))
    .pipe(concat(folder + '.js'))
    .pipe(gulp.dest(scriptsPath + '/' + folder + '/'));
  });
});

gulp.task('coverage', gulp.series('karma', function () {
  return gulp.src('./undefinedcoverage/report-html/index.html')
  .pipe(open());
}));

gulp.task('default', function () {
  gulp.watch('./**/src/*.js', gulp.series('local'));
});

gulp.task('build-ci', gulp.series('buildFunction-ci', 'karma'));
gulp.task('build-local', gulp.series('buildFunction-local', 'karma'));