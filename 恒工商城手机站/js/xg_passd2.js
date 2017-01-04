$(function(){

	var sumid = $('#sumid');

	//  实名验证
	var names1 = $('#names1');
	var idcardno = $('#idcardno');

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

	// 判断密码的强度 以字母开头长度必须是6~18位
	var reg =/^[a-zA-Z]\w{5,17}$/;

	// 验证用户名不能输入非法的字符
	var patrn=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im; 

	//  验证数字
	var regNa = new RegExp("^[0-9]*$");  

	// 验证中文
	var re = /[^u4e00-u9fa5]/; 

	// 验证身份证号
	var sfzh = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;  

	// 验证邮箱的格式
	var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;

	sumid.click(function(){
		
		// 验证实名验证
	    if(patrn.test(names1.val()))
		{
			masksShow('请输入正确的姓名');
			return false;
		}
		else if ( !re.test(names1.val()))
		{
			masksShow('请输入正确的姓名');
			return false;
		}
		else if( sfzh.test(idcardno.val()) === false)
		{
			masksShow('请输入正确的身份证号码');
			return false;
		}
		
	})
})