var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');

var baseDir = './resource';
var dist = './public';


// svgスプライト
gulp.task('svg-sprite', function () {
  gulp.src(baseDir + '/svg/**/*.svg')
    .pipe(svgSprite({
      // 何で出力するか
      mode: {
        symbol: {
          'dest': '.', // どこに
          'sprite' : 'sprite.svg' // ファイル名
        }
      },
      shape: {
        transform: [
          {
            svgo: { // svgのスタイルのオプション
              plugins: [
                { 'removeTitle': true }, // titleを削除
                { 'removeStyleElement': true }, // <style>を削除
                { 'removeAttrs': { 'attrs': 'fill' } } // fill属性を削除
              ]
          }}
        ]
      },
      // 吐き出す際のオプション
      svg : {
        xmlDeclaration: true, // xml宣言をつける
        doctypeDeclaration: true // doctype宣言をつける
      }
    }))
    .pipe(gulp.dest(dist + '/img'));
});


