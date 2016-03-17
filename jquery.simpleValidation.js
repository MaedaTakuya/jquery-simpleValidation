/* *******************************************
	jquery.simpleValidation 1.0.0

	The MIT License (MIT)
	Copyright (c) 2016 MaedaTakuya

	https://github.com/MaedaTakuya
******************************************* */
(function($){
	$.fn.simpleValidation = function(options) {
		return this.each(function() {
			var $this = $(this);





			$this.on('submit', function(event) {
// ---------- 必須項目 ----------
				$(".validation-required",$this).filter("textarea,[type='text'],[type='email'],[type='password']").each(function(){
					if(!$(this).val()){
						$(this).addClass('validation-err err-required');
					}else{
						$(this).removeClass('validation-err err-required');
					}
				});
				//radioの処理
				$(".validation-group--radio.validation-required",$this).each(function(){
					if($(":radio[name="+$(":radio",this).attr("name")+"]:checked").size() === 0){
						$(".validation-group__heading",this).addClass('validation-err err-required');
					}else{
						$(".validation-group__heading",this).removeClass('validation-err err-required');
					}
				});
				//checkboxの処理
				$(".validation-group--checkbox.validation-required",$this).each(function(){
					if($(":checkbox:checked",this).size() === 0){
						$(".validation-group__heading",this).addClass('validation-err err-required');
					}else{
						$(".validation-group__heading",this).removeClass('validation-err err-required');
					}
				});
// ---------- 必須項目 ----------



// ---------- エラー項目の表示 ----------
				if(0 < $(".validation-err").size()){
					// エラー処理を初期化
					$(".errMsg").remove();
					// エラー処理
					$(".err-required.validation-required").before('<span class="errMsg"></span>');
					$(".err-required.validation-group__heading").after('<span class="errMsg"></span>');
					event.stopImmediatePropagation();
					return false; 
				}else{
					$(".errMsg").remove();
					return true;
				}
// ---------- エラー項目の表示 ----------
			});



		});
	};
})( jQuery );