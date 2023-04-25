
//Importantdo dependencias CSS
const { src, dest, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const plumber = require('gulp-plumber')

//Importando dependencias para images
const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const avif = require('gulp-avif')

//Funciones para trabajar con sass y gulp

const css = done => {
    src('src/scss/**/*.scss')
    .pipe( plumber() )
    .pipe( sass() )
    .pipe( dest('build/css'))
    done()
}

//Funciones para optimizar las images
const versionWebp = done => {
    const options = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
    .pipe( webp( options ) )
    .pipe( dest('build/img') )
    done()
}

const versionAvif = done => {
    const options = {
        quality: 50
    }
    src('src/img/**/*.{jpg,png}')
    .pipe( avif(options) )
    .pipe( dest('build/img') )
    done()
}

const versionJpg = done => {
    const options = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{jpg,png}')
    .pipe( cache( imagemin(options) ) )
    .pipe( dest('build/img') )
    done()
}

//Para que siempre este compilando
const dev = done => {
    watch('src/scss/**/*.scss', css)
    done()
}

exports.css = css
exports.dev = dev
exports.webp = versionWebp
exports.avif = versionAvif
exports.jpg = versionJpg