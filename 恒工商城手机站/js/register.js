$(function(){

	//遮罩层 
	var masks = $('#masks');
	var masks_centeretxt = $('#masks_centeretxt');
	var yf_close = $('#yf_close');

	yf_close.click(function() {
		masks.hide();
	});

	function masksShow(test)
	{
		masks.show()
		masks_centeretxt.html(test);
	};


	// 验证
	var btns = $('#btns');
	var corporate_name = $('#corporate_name');
	var user_name = $('#user_name');
	var pasd1 = $('#pasd1');
	var pasd2 = $('#pasd2');
	var mailbox = $('#mailbox');
	var phone_number = $('#phone_number');
	var verification_code = $('#verification_code');
	var count_down = $('#count_down');
	var checkboxs = $('#checkboxs');

	var patrn=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;   
	var reg =/^[a-zA-Z]\w{5,17}$/;
	var phones = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
	var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;

	// 验证手机号码正确进行倒计时
	phone_number.keyup(function(event) {
	if(phones.test(phone_number[0].value))
	{
		var wait=60;
		function time(o) {
		    if (wait == 0) {
		        o.removeAttribute("disabled")
		        o.value="免费获取验证码"
		        wait = 60;
		    }
		     else {
		     	//  倒计时小于10的时候加上0
		     	if(wait<10)
		     	{
		     		o.value="重新发送(0"+wait+")";
		     		wait--;
		     		 setTimeout(function() {
		                time(o)
		            },
		            1000)
		     	}
		     	else
		     	{
		            o.setAttribute("disabled", true);
		            o.value="重新发送(" + wait + ")";
		            wait--;
		            setTimeout(function() {
		                time(o)
		            },
		            1000)
		        }

		    }
		}
		$('#count_down')[0].onclick=function(){
			time(this);
		};  
	}
	});
	
	// 点击验证
	btns.click(function(){

		if(  corporate_name.val() == '' )
		{
			masksShow('公司名称不能为空');
			return false;

		}else if( patrn.test(corporate_name.val()) )
		{
			masksShow('公司名称不能有特殊的字符');
			return false;

		}else if( user_name.val() =='' )
		{
			masksShow('账户名不能为空');
			return false;

		}else if ( patrn.test(user_name.val()) )
		{
			masksShow('账户名不能有特殊的字符');
			return false;

		}else if ( !reg.test(pasd1.val()) )
		{
			masksShow('密码必须以字母开头长度必须是6~18位');
			return false;

		}else if( pasd2.val() != pasd1.val() )
		{
			masksShow('两次密码不一致,请重新输入');
			return false;

		}else if(!search_str.test(mailbox.val()) )
		{
			masksShow('请输入正确的邮箱地址');
			return false;
		}else if(!phones.test(phone_number[0].value))
		{
			masksShow('请输入正确的手机号码');
			return false;
		}
		else if( verification_code.val() =='' )
		{
			masksShow('请输入正确的手机验证码');
			return false;
		}else if ( !checkboxs.is(":checked") )
		{
			masksShow('请勾选服务条款');
			return false;
		}
	})

})