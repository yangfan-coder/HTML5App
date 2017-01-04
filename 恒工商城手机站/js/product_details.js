$(function(){

// 轮播图
var swiper = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	paginationClickable: true
});

//遮罩层 
var masks = $('#masks');
var masks_centeretxt = $('#masks_centeretxt');
var yf_close = $('#yf_close');

function masksShow(test)
{
	masks.show()
	masks_centeretxt.html(test);
}
yf_close.click(function() {
	masks.hide();
});

// 选中的效果
function toggLeClik(id)
{
	var lists = $(id);
	var lists_li = lists.find('li');
	lists_li.click(function(){
		$(this).addClass('set').siblings().removeClass('set');
	})
}
toggLeClik('#lists1');
toggLeClik('#lists2');
toggLeClik('#lists3');
toggLeClik('#lists4');

// 加减
var jian = $('#jian');
var jia = $('#jia');
var nmb_val = $('#nmb_val');
var isnN = 0;

jia.click(function() {
	isnN++;
	 nmb_val.val(isnN);
});
jian.click(function() {
	if( isnN <= 0)
	{
		isnN = 0;
	}else
	{
		isnN--;
	}
	 nmb_val.val(isnN);
});
// 输入的时候取整
nmb_val.keyup(function() {
	
	if( $(this).val() <= 0 )
	{
		 $(this).val(parseInt($(this).val())) ;
	}
});

// 商品信息的进度条
function fnSet(id1,id2,id3)
{
	var oProgressBox = $(id1);
	var oProgressBar = $(id2);
	var oProgressText = $(id3);
	var allWidth = oProgressBox.width();
	var iNow = 0;
	var val = oProgressBox.find('.hid_inpt').val();
	var timer = setInterval(function(){

	if( iNow == val)
	{
		clearInterval(timer)

	}else{
			iNow += 1;
			oProgressBox.parent().parent().find('.jd').text( iNow + '%' )
			oProgressBar.css("clip","rect(0px,"+ iNow/100*allWidth +"px,15px,0)")
		}
	},30)
};
	fnSet("#progressBox1",'#progressBar1','#progressText1');
	fnSet("#progressBox2",'#progressBar2','#progressText2');
	fnSet("#progressBox3",'#progressBar3','#progressText3');

// 评论验证
var btns = $('#btns');
var textareas = $('#textareas');
btns.click(function(){
	if( textareas.val() =="" )
	{
		masksShow('评论怎么能为空呢？你说呢骚年');
	}
})

// 产品列表切换
var lists_cen = $('#lists_cen');
var lists_ceni = lists_cen.find('li');
var switching_content = $('#switching_content');
var new_class = switching_content.find('.new_class');

lists_ceni.click(function(){
	$(this).addClass('sets').siblings().removeClass('sets');
	var ist = $(this).index();
	new_class.eq(ist).show().siblings().hide();
})




})