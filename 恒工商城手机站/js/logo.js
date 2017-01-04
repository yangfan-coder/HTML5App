$(function(){

	// 验证
	var user_name = $('#user_name');
	var pasd = $('#pasd');
	var yf_yanzheng = $('#yf_yanzheng');
	var btns = $('#btns');

	//遮罩层 
	var masks = $('#masks');
	var masks_centeretxt = $('#masks_centeretxt');
	var yf_close = $('#yf_close');

	var phones = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
	var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;

	yf_close.click(function() {
		masks.hide();
	});

	function masksShow(test)
	{
		masks.show()
		masks_centeretxt.html(test);
	}

	btns.click(function(){

		if( !phones.test( user_name[0].value ) && !search_str.test(user_name[0].value))
		{

			masksShow( '请输入正确的用户名/手机/邮箱格式' );
			return false;
		}else if(pasd.val().length < 6)
		{

			masksShow( '密码的长度不能少于6位' );
			return false;

		}else if(yf_yanzheng.val() == '')
		{

			masksShow( '验证码不能为空' );
			return false;
		}

	})

})