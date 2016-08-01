$(function(){

/*设置轮播图容器宽度*/
function setSliderPanelWidth(sliderId, subNodes){
	var iW = $(sliderId).find(subNodes).eq(0).outerWidth(true);
	var len = $(sliderId).find(subNodes).length;
	$(sliderId).find('.panel').width(iW*len);
}

setSliderPanelWidth('#macthList','li');
setSliderPanelWidth('#focusSlidePanel','li');
setSliderPanelWidth('#midBtmSlidePanel','li');
setSliderPanelWidth('#midSlidePanel','.con');
setSliderPanelWidth('#columnSlidePanel','.content-inner');


/*赛程列表*/
$(function(){
	var oneLiWidth = $('.match-list-wrap').find('li').eq(0).outerWidth(true);
	var panel = $('#macthList').find('.panel');
	var len = panel.find('li').length;
	var leftBtn = $('#leftBtn');
	var rigthBtn = $('#rigthBtn');
	var index = 0;
	
	var panelLeft = panel.position().left;
	// 默认左边按钮是否可用
	if (panelLeft>=0) {
		$('#leftBtn').addClass('disabled');
	}else{
		$('#leftBtn').removeClass()('disabled');
	}

	leftBtn.click(function(){
		if ($(this).hasClass('disabled')) {
			return false;
		}
		
		index--;
		play();
	});
	
	
	rigthBtn.click(function(){
		if ($(this).hasClass('disabled')) {
			return false;
		}
		
		index++;
		play();
	});
	
	function play(){
		
		//判断是否到达边界
		if (index == 0) {
			$('#leftBtn').addClass('disabled');
		}else{
			$('#leftBtn').removeClass('disabled');
		}
		
		if (index == len-6) {
			$('#rigthBtn').addClass('disabled');
		}else{
			$('#rigthBtn').removeClass('disabled');
		}
		
		panel.animate({ 'left': -oneLiWidth*index });
	}
	
	
});



/*创建轮播图的分页项*/
function setTabNodes(tabName, sliderId, subNodes){
	if (!tabName) {
		return false;
	}
	var tab = $(tabName);
	var len = $(sliderId).find(subNodes).length;

	for (var i=0; i<len; i++) {
		$('<li>').appendTo(tab);
	}
	$(tabName).find(subNodes).eq(0).addClass('current');
	
}

setTabNodes('#midBtmSlideTab','#midBtmSlidePanel','li');
setTabNodes('#focusSlideTab','#focusSlidePanel','li');

	
/*轮播图*/
function setTab(tabId, tabItem, cls, ev, panelId, panelItem, prevBtn, nextBtn){
	var box = $(tabId);
	var panel = $(panelId).find('.panel');
	var panelItem = $(panelId).find(panelItem);
	var tabItem = box.find(tabItem);
	var len = panelItem.length;
	var onePanelItemWidth = panelItem.eq(0).width();
	var index = 0;
	var timer = null;
	
	var sLen = $(panelId).find(panelItem).length;
	var panelItemW = $(panelId).find(panelItem).eq(0).width();
	if (panelId == '#midBtmSlidePanel') {
		onePanelItemWidth = $(panelId).find(panelItem).eq(0).outerWidth(true);
		panelItemW = $(panelId).find(panelItem).eq(0).outerWidth(true);
	}
	
	$.each(tabItem, function(i) {
		$(this).on(ev, function(){
			clearInterval(timer);
			index = $(this).index();
			$(this).addClass(cls).siblings().removeClass(cls);
			panel.stop().animate({'left': -panelItemW*index});
		}).mouseout(function(){
			autoPlay();
		});
	});
	
	$(panelId).mouseover(function(){
		clearInterval(timer);
	}).mouseout(function(){
		autoPlay();
	});
	
	$(prevBtn).click(function(){
		index--;
		if (index < 0) {
			index = len-1;
		}
		play();
	});
	
	$(nextBtn).click(function(){
		index++;
		if (index >= len) {
			index = 0;
		}
		play();
	});
	
	function play(){
		tabItem.eq(index).addClass(cls).siblings().removeClass(cls);
		panel.stop().animate({ 'left': -onePanelItemWidth*index });	
	}
	
	function autoPlay(){
		timer = setInterval(function(){
			$(nextBtn).trigger('click');
		},3000);
	}
	autoPlay();
}
setTab('#vdieoTab', 'li:not(.more)', 'current', 'mouseover', '#midSlidePanel', '.con');
setTab('#columnTab', 'li', 'current', 'mouseover', '#columnSlidePanel', '.content-inner');
setTab('#focusSlideTab', 'li', 'current', 'mouseover', '#focusSlidePanel', 'li', '#slideBtnL', '#slideBtnR');
setTab('#midBtmSlideTab', 'li', 'current', 'mouseover', '#midBtmSlidePanel', 'li', '#midBtnLeft', '#midBtnRigth');


/*两屏轮播图*/
var vpnNode = $('#midBtmSlidePanel').find('li').eq(0).clone();
$('#midBtmSlidePanel').find('ul').append(vpnNode);
setSliderPanelWidth('#midBtmSlidePanel','li');	


/*常规数据对比*/
$(function(){
	var dateContrast = $('.date-contrast');
	dateContrast.find('span b').each(function(i, v){
		var data = $(this).text();
		dateContrast.find('.percent').eq(i).width(data);
	});
	
});



/*列表切换*/
function tabSwitch(modId, tabId, contentClas, currClass){
	/*默认显示第一项*/
	$(contentClas).show();
	$(contentClas+'.hide').hide();
	
	var $modId = $(modId);
	$modId.find(tabId).find('li').mouseover(function(){
		$(this).addClass(currClass).siblings().removeClass();
		var index = $(this).index();
		$modId.find(contentClas).hide().eq(index).show();
	});
}


/*最佳球员模块*/
tabSwitch('#bestPlayer','#bestPlayerTab','.player-panel','current');


/*回到顶部*/
var goTop = $('.gotop');
goTop.click(function(){
	$('body,html').animate({ scrollTop: 0 }, 800);
});
	
	
});
