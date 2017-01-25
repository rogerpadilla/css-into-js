# css-into-js

### Embed CSS into JS files with Gulp, allows to package CSS alongside the JS code ala Web Components.

#### Usage example:

```javascript
var cssIntoJs = require('css-into-js');

gulp.task('style', function() {
  return gulp.src(['./src/style/index.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
          outputStyle: 'compressed'
        }))
        .pipe(cssIntoJs())
        .pipe(sourcemaps.write())
        .pipe(rename('bundle.style.js'))
        .pipe(gulp.dest('./tmp'));
});
```
