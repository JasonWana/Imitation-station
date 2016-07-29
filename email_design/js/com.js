$(function(){



/*#New Message*/

$('.new-message').on('click',function(e){
	

	
});

/*排序*/
$('.select-btn').on('click',function(e){
	
	$('.sort-list').addClass('active');
	$('.sort-list').find('li').on('click',function(e){
		var type = $(this).text();
		$('.select-btn').text(type);
	});
	
	e.stopPropagation();
});

/*排序列表关闭*/
$(document).on('click',function(e){
	
	$('.sort-list').removeClass('active');
	
});

/*过滤已阅邮件*/
$('#filter-btn').on('click',function(e){
	
	var filterbtn = $(this);
	
	$(this).toggleClass('active');

	$('.mail-list').each(function(){

		if (filterbtn.attr('class') == 'active') {
			var mail = $(this).attr('data-type');
			if (mail != 'unread') {
				$(this).css('display','none');
			}	
		}else{
			$(this).css('display','block');
		}
		
	});
	
	/*
	// 如果邮件总条目小于等于5,就不显示loading动画
	var len = $('.mail-list[data-type=unread]').length;
	if (len <= 4) {
		$('.loading').css('display','none');
	}
	*/
	
	// 根据当前邮件总高度是否小于box的高度决定显示和隐藏loading动画
	var mailH = $('.mail-box').height();
	var boxH = $('.mail-bottom').height();
	if (mailH < boxH) {
		$('.loading').css('display','none');
	}else{
		$('.loading').css('display','block');
	}
	

	
});


/*生成随机颜色*/

$('.rand-color').each(function(){
	
	var color = randColor();
	$(this).css({
		'backgroundColor':color,
		'boxShadow':'0 0 30px '+color+','+'0 0 20px '+color
	});
	
});

function randColor(){
	var color=['#c35bee','#1fc58d','#fd7c4e'];
	return color[Math.floor(Math.random()*color.length)];;
}


/*点击新邮件去除标记*/
$('.mail-list').find('a').each(function(){
	
	$(this).on('click',function(e){
		
		$(this).find('h1').addClass('read');
		$(this).find('.new-mail').removeClass();
		e.preventDefault();
	});
	
	
});



/*载入更多邮件*/
$('.mail-bottom').scroll(function(){
	
	if ($('#filter-btn').attr('class') === 'active') {
		return false;
	}
	
	var mailH = $('.mail-box').height();
	var boxH = $('.mail-bottom').height();
	var scrollTop = $('.mail-bottom').scrollTop();
	
	var currDate = new Date();
	var hours = currDate.getHours();
	var seconds = currDate.getSeconds();
	var now = hours+':'+seconds;
	
	
	if (mailH < boxH + scrollTop) {
		var nodes = $('<div class=mail-list data-type=unread><a href=#><i class=rand-color></i><div class=form-name><h1 class=read>Lisa Guerrero</h1><span class=time>'+now+'</span><i class="new-mail"></i></div><div class=mail-title><h2>Design for health project</h2></div><p class=mail-summary>Hi Jessica, I love your UI design work, and I\'d like to talk with you about possibly revamping the UI on our desktop application. Can we jump on Skeype to discuss it when you have some time?</p></a></div>').appendTo($('.mail-box'));
	}


});


/*Search*/
$('#search').focus(function(){
	
	$(this).attr('placeholder','');
	
});

$('#search').blur(function(){
	
	$(this).attr('placeholder','Search');
	
});



});