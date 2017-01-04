$(function(){

	var shopping_lists = document.getElementById('shopping_lists');
	var alis = shopping_lists.getElementsByTagName('li');
	var checkIpnuts = document.getElementsByClassName('checkbox_inpts');
	var totals = document.getElementById('total');

	// 计算
	function getTotal()
	{
		var seleted = 0;
		for( var i = 0 ; i<alis.length; i++)
		{

			if( alis[i].getElementsByTagName('input')[0].checked )
			{
				alis[i].getElementsByTagName('b')[0].className = 'checkbox_inpt checkbox_inpt1';
				seleted += parseFloat(alis[i].getElementsByTagName('input')[1].value)

			}else{

				alis[i].getElementsByTagName('b')[0].className = 'checkbox_inpt';
			}
		}

		totals.innerHTML = seleted.toFixed(2);

	};

	// 小计
	function getSuTotal (lis)
	{
		var spans = parseFloat(lis.getElementsByTagName('span')[0].innerHTML)
		var is = parseInt(lis.getElementsByTagName('i')[0].innerHTML)
		var ipus = lis.getElementsByTagName('input')[1];
		var SuTotal = parseFloat(spans*is);
		ipus.value = SuTotal;

	};

	for( var i = 0 ; i<checkIpnuts.length; i++)
	{
		checkIpnuts[i].onclick = function()
		{
			getTotal()
		}

	}

	for( var j = 0 ; j<alis.length; j++ )
	{
		alis[j].onclick = function(e)
		{
			e = e || window.event;
			var el = e.srcElement;
			var cls = el.className;

			var inps = this.getElementsByTagName('i')[0];
			var inpsVal = parseInt(inps.innerHTML);
			var btns = this.getElementsByTagName('a')[0];


			switch(cls)
			{
				case 'jia':
					inps.innerHTML = inpsVal + 1;
					getSuTotal(this);
					break;

				case 'jian':
					if( inpsVal >1 )
					{
						inps.innerHTML = inpsVal - 1;

					}else{

						inps.innerHTML = 0;
					}
					getSuTotal(this);

					break;

				default:
					break;
			}
			getTotal()
		}
		//删除
		alis[j].getElementsByTagName('a')[2].onclick = function()
		{
			$(this).parents('li').remove()
		}
	}

// 判断方向
//返回角度
function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}
 
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
 
    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }
 
    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 4;
    } else if (angle >= 45 && angle < 135) {
        result = 1;
    } else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
 
    return result;
}
 
 var shopping_lists = document.getElementById('shopping_lists');
 var shopping_listsLi =shopping_lists.getElementsByTagName('li');

 for( var i = 0 ; i<shopping_listsLi.length; i++)
 {
 	shopping_listsLi[i].addEventListener('touchend', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            // alert("没滑动");
            break;
        case 1:
            // alert("向上");
            break;
        case 2:
            // alert("向下");
            break;
        case 3:
            // alert("向左");
             $(this).find('.las').css({left:'-3.2rem'})
             $(this).find('.new_list').css({left:'-3rem'})
            break;
        case 4:
          	$(this).find('.las').css({left:'0'})
             $(this).find('.new_list').css({left:'1rem'})
            break;
        default:            
    }   
}, false);

 } 
 //滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;   
}, false);

})