# css-into-js

### Package the CSS along with the JS.

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
