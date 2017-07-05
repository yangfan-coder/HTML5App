
// 暴露在外的公共的方法
// 显示
var Show = function (obj){
	obj.css('display','block');
}

// 隐藏
var Hide = function(obj){
	obj.css('display','none');
}

// 点击弹出二维码
var ShowCode = function(){
	var $_CommonCode  = $("#common-code");
	Show($_CommonCode);
}

// 点击隐藏弹出二维码
var HideCode = function (){
	var $_CommonCode  = $("#common-code");
	Hide($_CommonCode);
}

// 默认渲染星星的个数
var xxFn = function (obj){
	var Stars = $(obj);
	if(!Stars.length) return;
	for( var i = 0;i <Stars.length; i++){
		var _value = $(Stars[i]).children("input").val();
		$(Stars[i]).children('li:lt('+ _value +')').addClass("set");
	}
}
// 封装下拉的菜单选项点击事件
var dropDownFn = function(obj){
	var Html = obj.text(),
	par = obj.parent('ul'),
	prev = par.length && par.prev().hasClass("drop-down-text")? par.prev() : null;
	prev.text(Html);Hide(par);
};
// 封装弹出下拉的菜单
var dropDown = function (obj,mun){
	if(!obj && typeof mun != "number") return;
	var oUl = obj.parent().children('ul');
	oUl.length && mun == 0 ? Show(oUl):Hide(oUl);
};
// 判断两个下拉框同时显示
var nextFn = function(obj,_this){
	obj.next().css("display") == "none" ? dropDown(_this,0) : dropDown(_this,1);
};
// 切换tab
var tabFn = function (){


};
// 公共头部
;(function(){
	var Cn = {
		oPlace:$("#place"),											// 城市按钮 
		ListEnter:$("#list-enter")									// 城市弹出层
	};

	Cn.oPlace.on("click",function(event){
		event.stopPropagation();
		Show(Cn.ListEnter);
	});

	Cn.ListEnter.on("click",function(){
		event.stopPropagation();
	});

	$(document).on("click",function(){
		Hide(Cn.ListEnter);
	});

}());

/*
	法务商城
*/
;(function(){
	var obj = {
		BusinessTxt :$("#business-txt"),							// 获取到业务类型[类别]		
		BusinessWhole: $("#business-whole"),						// 获取到业务类型[区域]		
		ServiceTxt :$("#service-txt"),								// 获取到服务区域[类别]
		ServiceWhole : $("#service-whole"),							// 获取到服务区域[区域]
		News:$("#news"),											// 滚动列表的主体
		Roll_1:$("#roll-1"),											// 滚动列表的第一个内容区
		Roll_2:$("#roll-2")											// 滚动列表的第二个内容区
	}
	
	// 业务类型
	obj.BusinessTxt.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(obj.BusinessWhole,_this);
	});
	obj.BusinessTxt.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});

	obj.BusinessWhole.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(obj.BusinessTxt,_this);
	});
	obj.BusinessWhole.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});

	// 服务区域
	obj.ServiceTxt.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(obj.ServiceWhole,_this);
	});
	obj.ServiceTxt.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});
	obj.ServiceWhole.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(obj.ServiceTxt,_this);
	});
	obj.ServiceWhole.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});

	// 点击空白隐藏下拉
	$(document).on("click",function(){
		dropDown(obj.BusinessTxt,1);
		dropDown(obj.BusinessWhole,1);
		dropDown(obj.ServiceTxt,1);
		dropDown(obj.ServiceWhole,1);
	});

	// 无限滚动
	obj.Roll_1.html(obj.Roll_2.html());
	function RollFn(){
		if(obj.News.get(0).scrollTop - obj.Roll_2.get(0).offsetHeight>=0){
			obj.News.get(0).scrollTop -= obj.Roll_1.get(0).offsetHeight;	
		}else{
			obj.News.get(0).scrollTop++;
		};
	};
	var timer = setInterval(RollFn,30);
	obj.News.on("mouseout",function(){
		timer = setInterval(RollFn,30);
	}).on("mouseover",function(){
		clearTimeout(timer);
	});

}());

/*
	法务商城 详情
*/
;(function(){

	var Details = {
		oHimg : $("#h-img"),								//	移入的二维码
		oImgDown:$('#img-down')								// 	律师二维码
	}

	// 移入律师详情的二维码
	Details.oHimg.on("mouseover",function(){
		Details.oImgDown.stop().show(300)
	}).on("mouseout",function(){
		Details.oImgDown.stop().hide(300)
	});

	// 渲染星星
	xxFn(".xx");

}());

/*
	律师详情
 */
;(function(){
	var LvShi = {
		LvshiText1:$("#lvshi-text1"),								// 业务类型[分类]下拉框
		LvshiText2:$("#lvshi-text2")								// 业务类型[分类]下拉框
	}

	// 业务类型[分类]
	LvShi.LvshiText1.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(LvShi.LvshiText2,_this);
	})
	LvShi.LvshiText1.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});

	LvShi.LvshiText2.on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		nextFn(LvShi.LvshiText1,_this);
	})
	LvShi.LvshiText2.next().children('li').on("click",function(event){
		event.stopPropagation();
		var _this = $(this);
		dropDownFn(_this);
	});

	// 点击空白隐藏
	$(document).on("click",function(){
		dropDown(LvShi.LvshiText1,1);
		dropDown(LvShi.LvshiText2,1);
	});
}());

/*
	咨询
 */
;(function(){
	var Cosn = {
		SayList:$('#say-list'),										// tab切换的cen
		TabBtn:$("#tab-btn").children('a'),							// tab的btn	
		SayListUl: $('#say-list').children('ul')					// tab切换内容
	} 	

	// 点击切换
	Cosn.TabBtn.on("click",function(){
		var _this = $(this),
			_index = _this.attr("data-val");
		_this.addClass('set').siblings("a").removeClass("set");
		Cosn.SayListUl.eq(_index).show().siblings("ul").hide();
	})	


}());


/*
	律师说

 */
;(function(){
	var vd = {
		VoicesClick:$(".voices-click"),								// 点击播放的btn
		ListLis:$("#list").children("li")							// 所有点击播放器的父级Li
	};

	vd.VoicesClick.on("click",function(){
		var _thisLi = $(this).parents("li");
		var attr = _thisLi.attr("data-val");
		_thisLi.attr("data-val","0").siblings("li").attr("data-val",'1');
		for( var i = 0;i<vd.ListLis.length;  i++){
			$(vd.ListLis[i]).find(".audio").get(0).pause();
			$(vd.ListLis[i]).attr("data-val",'0');
		}
		if(attr == "0"){
			_thisLi.attr("data-val",'1');
			_thisLi.find(".audio").get(0).play();
		}else{
			_thisLi.attr("data-val",'0');
			_thisLi.find(".audio").get(0).pause();
		}

	})

}());

