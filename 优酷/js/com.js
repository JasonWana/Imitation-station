$(function(){
	
	
	
		
	/*更改导航当前状态current*/
	$('.nav-content > ul li').click(function(){
		
		$(this).addClass('current').siblings().removeClass('current');
	
	});


	/*关闭notice*/
	$('.close-notice').click(function(){
		
		$('.notice-wrap').css('display','none');
		
	});

	
	/*关闭推荐内容*/
	$('.con .con-close').each(function(){
		
		$(this).click(function(e){
			$('.remove-box').css('display','none');
			$(this).css('visibility','hidden').parent().parent().find('.remove-box').css('display','block');
			e.stopPropagation();
		});
		
	});
	/*点击目标区域并判断e.target对象是否是提交按钮*/
	$('.remove-box').click(function(e){
		if (!$('.remove-opt a').is(e.target)) {
			e.stopPropagation();
		}
	});
	
	$(document).click(function(e){
		$('.remove-box').css('display','none');
		$('.con-close').css('visibility','visible');
		e.stopPropagation();
	});

	

	/*$('.sec-tab').find('li').mouseover(function(){
		$(this).addClass('current').siblings().removeClass();
		var index = $(this).index();
		$('.tab-content').css('display','none').eq(index).css('display','block');
	});*/
	
	function tab(parent){
		/*默认显示*/
		$('[class=tab-content]').css('display','block');
		$('.tab-content.hide').css('display','none');
		
		var $parent = $(parent);
		$parent.find('.sec-tab').find('li').mouseover(function(){
			$(this).addClass('current').siblings().removeClass();
			var index = $(this).index();
			$parent.find('.tab-content').css('display','none').eq(index).css('display','block');
		});
	}
	
	
	tab('#mod-original');
	tab('#mod-TV');
	tab('#mod-VarietyShow');
	tab('#mod-film');
	tab('#mod-vipFilm');
	tab('#mod-entertainment');
	tab('#mod-music');
	tab('#mod-laifeng');
	tab('#mod-live');
	tab('#mod-tourismAndtourism');
	tab('#mod-carAndtechnology');
	tab('#mod-more');
	
	/*#mod-TV的轮播广告*/
	$(function(){
		var $panel = $('#mod-TV').find('.panel');
		var item = $panel.find('.col');
		var len = item.length;
		var oneItemWidth = item.eq(0).outerWidth(true);
		
		$panel.width(oneItemWidth*len);
		
	});
	
	

	function modTab(sideId){
		var _sideId = $(sideId);
		var iRowsW = _sideId.find('.panel .rows').eq(0).outerWidth(true);
		var iRowsW2 = parseInt(iRowsW/2);
		var size = _sideId.find('.panel .rows').size();
//		alert(size);
		var panelW = iRowsW*size;
		var sideW = _sideId.width();
		//设置容器盒子的宽度
		_sideId.find('.panel').width(panelW);
		var i = 0;
		var max = Math.floor(panelW/sideW);


		_sideId.find('.prev').click(function(){
			i++;
			moveL();
			
		});
		
		_sideId.find('.next').click(function(){
			i--
			moveR();
		});
		

		function moveL(){
			if (i==-1) {
				_sideId.find('.panel').stop().animate({left: 0});
				i = 0;
			}else{
				_sideId.find('.panel').stop().animate({left: -(i*sideW)});
			}
			
		}
		
		function moveR(){
			
			if (panelW-Math.abs(i*sideW) < sideW) {
				_sideId.find('.panel').stop().animate({left: -(panelW-sideW)});
				i = max-1;
			}else{
				_sideId.find('.panel').stop().animate({left: -(i*sideW)});
			}
			
			if (i>max-1) {
				_sideId.find('.panel').stop().animate({left: -(panelW-sideW)});
				i = max;
			}else{
				_sideId.find('.panel').stop().animate({left: -(i*sideW)});
			}
		}
		
		function moveR(){
			if (i==-1) {
				_sideId.find('.panel').stop().animate({left: 0});
				i = 0;
			}else{
				_sideId.find('.panel').stop().animate({left: -(i*sideW)});
			}
		}
	}
	modTab('#film1');
	modTab('#film2');
	modTab('#vipFilm1');
	modTab('#vipFilm2');

	
	
	
	/*设置sidebar导航*/
	(function(){
		var fixNav = $('#fix-nav');

		function initFixNav(){
			var fixHeight = fixNav.height();
			var winHeight = $(window).height();
			var b = (winHeight-fixHeight)/2;
			if (parseInt(b)<135) {
				b = '135px';
			}
			fixNav.css('bottom', b);	
		}
		initFixNav();
		
		$(window).resize(function(){
			initFixNav();
		});
		
		
	})();
	
	/*回到顶部/侧边栏动画/header导航动画*/
	$(function(){
		
		var goTop = $('#goTop');
		var fixNav = $('#fix-nav');
		var topNav = $('#topNav');
		var oLi = fixNav.find('li');
		var len = oLi.length;
		
		/*头部主导航栏显示和隐藏*/
		var oldScroll= $(window).scrollTop();
		$(window).scroll(function(){
			
			var newScroll = $(window).scrollTop();
			if (newScroll > 500) {
				if (newScroll > oldScroll) {
					topNav.fadeOut();
				}else{
					topNav.fadeIn();
				}			
			}
			oldScroll=newScroll;
		});
		
		function init(){
			var initScroll= $(window).scrollTop();
			if (initScroll> 500) {
	            goTop.fadeIn();
	            fixNav.stop().animate({ 'right':25},300);
	        } else {
	        	goTop.fadeOut();
	        	fixNav.stop().animate({ 'right':-30},300,function(){
	        		oLi.removeClass('current');
	        	});
	        }
		}
		init();
		
		$(window).scroll(function() {
	    	init();
	        
	        var pos = getPos();
	        for (var i=0;i<len;i++) {
        		if ($(window).scrollTop() >= pos[i]-300) {
	        		oLi.removeClass('current');
	        		oLi.eq(i).addClass('current');
	        	}
	        }
	       
        });
        
        
		function getPos(){
			var arr = [];
			var eles = getModPos();
			
			for (var key in eles) {
	        	arr.push(eles[key]);
	        }
			return arr;
		}
		
		
		
        
		goTop.click(function(){
			$('body,html').animate({ scrollTop: 0 }, 800);
		});
		
		// 点击侧边栏icon跳转至相应模块
		function goToMod(){
			for (var i=0;i<len;i++) {
				oLi[i].onclick = function(){
					var eles = getModPos();
					for (var key in eles) {
						if ($(this).data('id') == key) {
							$('body,html').animate({ scrollTop: eles[key] - 100 }, 500);
						}
					}
				};
			}
		}
		goToMod();
		
		//获取对应模块的id和offsetTop
		function getModPos(){
			var obj = {};
			var arrPos = [];
			
			for (var j=0;j<len;j++) {
				var ele = $(oLi[j]).data('id');
				arrPos.push( $(ele).offset().top );
			}
			
			for (var i=0;i<len;i++) {
				var key = $(oLi[i]).data('id');
				obj[key] = arrPos[i];
			}
			return obj;
		}
		
	});
	
});

