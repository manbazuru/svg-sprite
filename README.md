# svgスプライト

## 使い方
1. /resource/svgにsvgファイルを入れる
2. gulp svg-spriteを行うと、public/imgにsprite.svgが作られる
3. 使う時は以下のように利用する

```
<svg class="facebook" role="img">
  <title>Facebook</title>
  <use xlink:href="img/sprite.svg#facebook"></use>
</svg>
```

## 注意点
- ローカル作業の場合、chromeだとリンクが見れない

## 参考リンク
- [svgo(svgの中身を変更する時)](https://github.com/svg/svgo)
- [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite/blob/master/README.md)
- [svg-spriteオプション詳細](https://github.com/jkphl/svg-sprite/blob/master/docs/configuration.md)
- [svg4everybody(IE11のフォールバック用js)](https://github.com/jonathantneal/svg4everybody)
