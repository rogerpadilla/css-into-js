# css-into-js

### Package CSS alongside the JS code in the generated bundle (be able to provide a single .js bundle file to distribute your module).

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
