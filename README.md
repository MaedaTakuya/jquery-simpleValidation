#jquery-simpleValidation
Form内容のバリデーションをサブミット前にブラウザ側で行うプラグインです。

##Licenseについて
このプラグインはMITライセンスです。  
ソースコード内の著作権表示を残して頂ければ、個人・商用問わずご自由にご利用頂けます。

*This software is released under the MIT License, see LICENSE.md.*

##サンプルコード
[demo](http://maedatakuya.github.io/jquery-simpleValidation/example.html)

##使い方
* jQuery本体と、[jquery.simpleValidation]を読み込みます。
* 要素をセレクタで指定して実行  
  下記はformにclass="simpleValidation"を指定し、クラスセレクタで実行した場合。
```
$(function() {
  $('.simpleValidation').simpleValidation();
});
```

* 必須項目(textarea,[type='text'],[type='email'],[type='password']の場合)  
  必須にしたい要素にclass="validation-required"を指定します。

* 必須項目([type="radio"],[type="checkbox"]の場合)  
  複数のラジオ・チェックボックスをdivなどでグループ化し、  
  ラジオの場合、class="validation-group validation-required validation-group--radio"を指定します。  
  チェックボックスの場合、class="validation-group validation-required validation-group--checkbox"を指定します。  
  そして、適当な要素で見出しをマークアップし、class="validation-group__heading"を指定します。

* CSSに関しては、[fsimpleValidation.css]に最低限のスタイルを記述していますが、適宜ご準備ください。  
  また、[example.html]ではbootstrapを使用していますが、必須ではありません。