'use strict'
//import 'react-native-mock/mock'
//import 'react-native-mock-render/mock'
import  gulp from 'gulp'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import babelify from 'babelify'
import print from 'gulp-print'
import transform from 'vinyl-transform'
import through2 from 'through2'
import aliasify from 'aliasify'
import run from 'tape-run'
import tapSpec from 'tap-spec'


gulp.task('build-react', ()=>{
  const options = {
    entries: "./src/tests.js",
    extensions: ['.js'],
    debug: true,
    paths: ['./src/'],
  }
  
  const aliasConfig = {
    aliases: {
      'react/lib/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistrytests/unit/*.html',
      'react-native': 'react-native-web'
    },
    verbose: true
  }
  
  
  debugger
  return browserify(options)
        .transform(babelify)
        .transform(aliasify, aliasConfig)
        .bundle()
        .pipe(run())
        .pipe(tapSpec())
        .pipe(process.stdout)
 
})