
//Importantdo dependencias CSS
const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

//Funciones para trabajar con sass y gulp

const css = done => {
    src('src/scss/**/*.scss')
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( dest('build/css'))
    done()
}

//Para que siempre este compilando
const dev = done => {
    watch('src/scss/**/*.scss', css)
    done()
}

exports.css = css
exports.dev = dev