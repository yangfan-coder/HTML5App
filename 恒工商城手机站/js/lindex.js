$(function(){

	// 表单验证
	var contacts = $('#li-contacts');
	var mobile_phone = $('#li-mobile_phone');
	var telephone = $("#li-telephone");
	var Company_name = $("#li-Company_name");
	var mailbox = $('#li-mailbox');
	var nan = $('#li-nan');
	var nv = $('#li-nv');
	var product_name = $('#li-product_name');
	var product_quantity = $('#li-product_quantity');
	var upload1 = $('#li-upload1');
	var upload2 = $('#li-upload2');
	var textareas_text = $('#li-textareas_text');
	var bnts1 = $('#li-bnts1');

	// 正则表达式
	var patrn = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;     //验证用户名不能输入非法的字符
	var phones = /^(14[0-9]|13[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$$/;
	var search_str = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;

	// 点击提交的验证
	bnts1.click(function(){
		// 验证联系人
		if(contacts.val() == '')
		{
			alert('联系人不能为空');
			return false;  
		}
		else if(patrn.test(contacts.val()))
		{
			alert('联系人不能输入特殊字符');
		    return false;   
		}
		// 验证手机号码
		else if( !phones.test(mobile_phone[0].value) )
		{
			alert('请正确的输入手机号码');
			return false; 
		}
		// 验证公司名称
		else if( Company_name.val() == '')
		{
			alert('公司名称不能为空');
			return false;  
		}else if( patrn.test(Company_name.val()) )
		{
			alert('公司名称不能输入特殊字符');
		    return false;   
		}
		// 验证邮箱
		else if( !search_str.test(mailbox.val()) )
		{
			alert('请输入正确的邮箱地址');
		    return false;  
		}
		// 验证产品名称
		else if (product_name.val() == '')
		{
			alert('产品名称不能为空');
			return false; 
		}else if( patrn.test(product_name.val()) ){

			alert('产品名称不能输入特殊字符');
		    return false;
		}
		// 验证产品数量
		else if(product_quantity.val() =='' )
		{
			alert('产品数量不能为空');
		    return false;
		}
		// // 验证上传尺寸图
		// else if( upload1.val() == '' )
		// {
		// 	alert('上传尺寸图不能为空');
		//     return false;
		// }
		// // 验证上传尺寸图
		// else if ( upload2.val() == ''  )
		// {
		// 	alert('上传照片不能为空');
		//     return false;
		// }
		// 验证内容
		else if ( textareas_text.val() == '' )
		{

			alert('内容不能为空');
			 return false;
		}
	})

})