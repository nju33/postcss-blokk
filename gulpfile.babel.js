import gulp from 'gulp';
import nullpo from 'nullpo';
import plumber from 'gulp-plumber';
import babel from 'gulp-babel';
import shell from 'gulp-shell';
import gif from 'gulp-if';
import PrettyError from 'pretty-error';
import beeper from 'beeper';
import browserSync from 'browser-sync';
import bsConfig from './bs-config';

const dev = process.env.NODE_ENV === 'dev';
const prod = process.env.NODE_ENV === 'prod';
const babelConf = {
  presets: nullpo([
    ['env', {targets: {node: 6}}],
    (prod ? 'babili' : null)
  ]),
  plugins: [
    'transform-decorators-legacy',
    'transform-object-rest-spread',
    'transform-class-properties',
    'add-module-exports'
  ]
};

gulp.task('lib', () => {
  gulp.src('lib/*.js')
    .pipe(plumber({errorHandler: onError}))
    .pipe(babel(babelConf))
    .pipe(gif(dev, shell([
      'sleep .1s',
      'node -r babel-register example/example.js'
    ])))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', ['lib'], () => {
  const bs = browserSync.create();
  bs.init(bsConfig, () => {
    gulp.watch('+(lib|example)/*.js', ['lib']);
  });
});

const pe = new PrettyError();
function onError(err) {
  console.log(pe.render(err));
  beeper(2);
}
