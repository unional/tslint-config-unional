const gulp = require('gulp');
const gulpTslint = require('gulp-tslint');
const uniq = require('lodash.uniq');
const path = require('path');
const tslint = require('tslint');
const through = require('through');
const gutil = require('gulp-util');
const PluginError = gutil.PluginError;

function positiveTest(config) {
  var program = tslint.Linter.createProgram('./tsconfig.json');
  return gulp.src(`spec/${config}/*.pass.ts`)
    .pipe(gulpTslint({
      configuration: `./${config}.js`,
      formatter: 'verbose',
      program
    }))
    .pipe(gulpTslint.report());
}
function negativeTest(config, severity) {
  if (!severity) severity = 'error'
  var program = tslint.Linter.createProgram('./tsconfig.json');
  return gulp.src(`spec/${config}/*.${severity}.ts`)
    .pipe(gulpTslint({
      configuration: `./${config}.js`,
      formatter: 'verbose',
      program
    }))
    .pipe((function () {
      let errMsg
      return through(function (file) {
        const filename = path.basename(file.history[0])
        const matches = new RegExp(`(.*)\\.(\\d*)\\.${severity}\\.ts`).exec(filename)
        const ruleName = matches[1]
        const count = matches[2]
        const rules = file.tslint.failures.filter(f => f.ruleName === ruleName && f.ruleSeverity === severity)
        if (rules.length === 0) {
          errMsg = `[${gutil.colors.cyan(config)}] ${gutil.colors.red(`${filename} did not trigger '${ruleName}'`)}`
        }
        else if (rules.length != count) {
          errMsg = `[${gutil.colors.cyan(config)}] ${gutil.colors.red(`${filename} expected ${failCount} violation of '${ruleId}' but received ${rules.length}`)}`
        }
        else {
          const unexpectedRules = uniq(file.tslint.failures.filter(f => f.ruleName !== ruleName).map(f => `'${f.ruleName}'`))
          if (unexpectedRules.length > 1)
            errMsg = `[${gutil.colors.cyan(config)}] ${gutil.colors.red(`${filename} triggered unexpected rule(s): ${unexpectedRules.join(', ')}`)}`
        }
      }, function () {
        if (errMsg) {
          this.emit('error', new PluginError('gulp-tslint', errMsg));
        } else {
          this.emit('end');
        }
      });
    })());
}

function buildTasks(styles) {
  const entries = [];
  styles.forEach(s => {
    const p = `tslint-${s}-positive`;
    entries.push(p);
    gulp.task(p, () => positiveTest(s));

    const e = `tslint-${s}-error`;
    entries.push(e);
    gulp.task(e, () => negativeTest(s));

    const w = `tslint-${s}-warning`;
    entries.push(w);
    gulp.task(w, () => negativeTest(s, 'warning'));
  });
  return entries;
}

gulp.task('tslint', buildTasks(['index', 'standard', 'semi-standard', 'strict']));

gulp.task('default', ['tslint']);
