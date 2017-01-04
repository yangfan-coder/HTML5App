$(function(){

	var yf_rights_texts1 = $('#yf_rights_texts1');
	var yf_rights_texts2 = $('#yf_rights_texts2');
	var yf_rights_texts3 = $('#yf_rights_texts3');
	var rights_texts_readio_bom = $('#rights_texts_readio_bom');

	var rights_texts_readio1 =  yf_rights_texts1.find('.rights_texts_readio' );
	var rights_texts_readio2 =  yf_rights_texts2.find('.rights_texts_readio' );
	var rights_texts_readio3 =  yf_rights_texts3.find('.rights_texts_readio' );

	// 点击的事件
	function rightsTexts(id){

		id.click(function(){
			$(this).addClass('readio1').siblings().removeClass('readio1');
			if( rights_texts_readio2.eq(4).hasClass('readio1') )
			{
				rights_texts_readio_bom.show()
			}else{
				rights_texts_readio_bom.hide()
			}
			if(rights_texts_readio1.eq(1).hasClass('readio1'))
			{
				rights_texts_readio2.eq(3).hide();
				
			}else{
				rights_texts_readio2.eq(3).show();
			}
		});

	};
	rightsTexts(rights_texts_readio1);
	rightsTexts(rights_texts_readio2);
	rightsTexts(rights_texts_readio3);

})