$(function(){

	// 公共样式的js

	// 尾部点击事件
	var yf_tail = $('#yf_tail');
	var yf_tailLi = yf_tail.find('li');

	yf_tailLi.click(function(){
		$(this).addClass('selecteds').siblings().removeClass('selecteds');
	})

	//遮罩层 
	var masks = $('#masks');
	var masks_centeretxt = $('#masks_centeretxt');
	var yf_close = $('#yf_close');
	
	function masksShow(test)
	{
		masks.show()
		masks_centeretxt.html(test);
	}
	// 关闭遮罩层
	yf_close.click(function() {
		masks.hide();
	});
})