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
  .on('error', err=>{
    console.log(`eror: ${err}`)
  })
  .transform(aliasify, aliasConfig)
  .on('error', err=>{
    console.log(`eror: ${err}`)
  })
        .bundle()
  .on('error', err=>{
    console.log(`eror: ${err}`)
  })
  .pipe(run())
  .pipe(tapSpec())
  .pipe(process.stdout)
  // .on('results', console.log)
  //       .pipe(source())
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
  //       .pipe(buffer())
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
  //       .pipe(run())
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
        // .pipe(print())
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
  //       .pipe(gulp.dest('./'))
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
  // .on('error', err=>{
  //   console.log(`eror: ${err}`)
  // })
})



// gulp.task('js', done=>{
//     const bundler = //transform(filename=>{
//          browserify({
//             // entries:filename,
//             debug:true,
//         })
//         .on('error', err=>{
//             // console.log(`BERROR: ${err}`)
//         })
//         .transform('babelify', {
//             presets:['env']
//         })
//
//     return bundler.bundle()
//     .pipe(source())
//     // return gulp.src('./src/tests.js')
//     // .pipe(through2((file, enc, next)=>{
//     //     console.log(file, typeof file)
//     //     const b = browserify()
//     //     b.add(file.path)
//
//         // return b.transform(babelify)
//         // .bundle((err, res)=>{
//         //     console.log(res, err)
//         //     file.contents = res
//         //     next(null, file)
//         // })
//         // .on('error', err => {
//         //   console.log(`BERROR: ${err}`)
//         // })
//     // }))
//     .pipe(buffer())
//     .on('error', err => {
//       console.log(`BERROR: ${err}`)
//     })
//     //.pipe(source('app.js'))
// //    .pipe(bundler)
// //     .pipe(buffer())
//     .on('error', err=>{
//         console.log(`ERROR: ${err}`)
//     })
//     .pipe(print())
//     .pipe(process.stdout)
// })
//

