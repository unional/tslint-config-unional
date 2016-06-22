/* tslint:disable:no-unused-variable */
import * as gulp from 'gulp';

// arrow function don't need to be typed
gulp.task('test', (done) => {
  // do stuff...
});

// typedef: call-signature
function foo(a: string) {
  return 123;
}
