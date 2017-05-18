const gulp = require('gulp');
const gulpTslint = require('gulp-tslint');
const tslint = require('tslint');
const through = require('through');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

function positiveTest(config) {
  var program = tslint.Linter.createProgram('./tsconfig.json')
  return gulp.src(`spec/${config}/*.pass.ts`)
    .pipe(gulpTslint({
      configuration: `./${config}.js`,
      formatter: 'verbose',
      program
    }))
    .pipe(gulpTslint.report());
}

function negativeTest(config) {
  var program = tslint.Linter.createProgram('./tsconfig.json')
  return gulp.src(`spec/${config}/*.fail.ts`)
    .pipe(gulpTslint({
      configuration: `./${config}.js`,
      formatter: 'verbose',
      program
    }))
    .pipe((function () {
      var hasError = false;
      return through(function (file) {
        if (file.tslint.failureCount === 0) {
          gutil.log(
            `[${gutil.colors.cyan('gulp-tslint')}]`,
            gutil.colors.red(`error: ${file.tslint.failureCount}`),
            `(negative) ${file.relative}`);
          hasError = true;
        }
      }, function () {
        if (hasError) {
          this.emit('error', new PluginError('gulp-tslint', 'Failed negative test(s).'));
        } else {
          this.emit('end');
        }
      });
    })());
}

gulp.task('tslint-index-positive', function () {
  return positiveTest('index');
});

gulp.task('tslint-index-negative', function () {
  return negativeTest('index');
});

gulp.task('tslint-strict-positive', function () {
  return positiveTest('strict');
});

gulp.task('tslint-strict-negative', function () {
  return negativeTest('strict');
});


gulp.task('tslint-standard-positive', function () {
  return positiveTest('standard');
});

gulp.task('tslint-standard-negative', function () {
  return negativeTest('standard');
});

gulp.task('tslint', [
  'tslint-index-positive',
  'tslint-index-negative',
  'tslint-standard-positive',
  'tslint-standard-negative',
  'tslint-strict-positive',
  'tslint-strict-negative'
]);

gulp.task('default', ['tslint']);
