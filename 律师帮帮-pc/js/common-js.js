/*
 	2017-6-22
	法务商城
*/
function Show(obj){
	obj.style.display = 'block';
}

function Hide(obj){
	obj.style.display = 'none';
}

// 获取css样式
function getStyle(element, attr){
	  if(element.currentStyle){
	    return element.currentStyle[attr];
	  }else{
	    return window.getComputedStyle(element,null)[attr];
	  }
}
  

// DOM 查询ID
function GetId(id){
	var obj = null;
	if(document.querySelector){
		obj =  document.querySelector('#'+id);
	}else {
		obj = document.getElementById(id);
	}
	return obj;
}
// DOM 查询Class
function GetClass(cls) {
	var attr = [];
	if(document.querySelectorAll){
		attr = document.querySelectorAll('.'+ cls);
	}else if(document.getElementsByClassName){
		attr = document.getElementsByClassName(cls);
	}else{
		var lis = document.getElementsByTagName('*');
		var re = RegExp("\\b" + cls + "\\b")	
		for( var i = 0; i< lis.length; i++){

			if( re.test(lis[i].className)){
				attr.push(lis[i]);
			}
		}
	}
	return attr;
}

// 点击弹出二维码
function ShowCode(){
	show(GetId('common-code'));
}
// 点击隐藏弹出二维码
function HideCode(){
	hide(GetId('common-code'));
}

// 绑定事件
function addEvent(elem,event,fn) {  
    if(elem.addEventListener){  
        elem.addEventListener(event,fn,false);  
    }else if (elem.attachEvent){  
        elem.attachEvent('on'+event,fn);  
    }else{  
        elem['on'+event]=fn;  
    }  
}

if(document.getElementById('business-txt')){
	addEvent(document.getElementById('business-txt'),'click',function(){
		
	})
}

