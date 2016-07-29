
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));  
}  
  
function addClass(obj, cls) {  
    if (!hasClass(obj, cls)) obj.className += " " + cls;  
}  
  
function removeClass(obj, cls) {  
    if (hasClass(obj, cls)) {  
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');  
        obj.className = obj.className.replace(reg, ' ');  
    }  
}  
  
function toggleClass(obj,cls){  
    if(hasClass(obj,cls)){  
        removeClass(obj, cls);  
    }else{  
        addClass(obj, cls);  
    }  
} 

function getStyle(ele, attr){
	return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, null)[attr];
}


function css(ele, attr, value){
	if (ele && attr) {
		if (arguments.length == 2) {
			return getStyle(ele, attr);
		}
		ele.style[attr] = value;
	}
}


function stopPropagation(ev){
	ev.stopPropagation ? ev.stopPropagation() : ev.cancelBubble = true;
}

function trimStr(str){
	return str.replace(/(^\s*)|(\s*$)/g,"");
}


function startMove(obj,json,fn){  
    clearInterval(obj.timer);  
    obj.timer = setInterval(function(){  
        var bStop = true;  
        for(var attr in json){    
            //取当前值    
            var iCur = 0;  
            if(attr == 'opacity'){  
                iCur = parseInt(parseFloat(getStyle(obj, attr))*100);  
            }else{  
                iCur = parseInt(getStyle(obj,attr));  
            }  
            //计算速度  
            var iSpeed = (json[attr] - iCur) / 8;  
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  
            //检测停止  
            if(iCur != json[attr]){  
                bStop = false;  
            }     
            if(attr=='opacity'){  
                iCur += iSpeed  
                obj.style.filter='alpha(opacity:' + iCur + ')';  
                obj.style.opacity=iCur / 100;  
            }  
            else{  
                obj.style[attr]=iCur+iSpeed+'px';  
            }  
        }  
        if(bStop){  
            clearInterval(obj.timer);  
            if(fn) fn();  
        }  
    },30)  
}  

