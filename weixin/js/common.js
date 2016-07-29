window.onload = load;

function load(){
	
	function init(){
		var chatroomPanel = document.querySelector('#contentPanel');
		var chatroomMessage = document.querySelector('#chatroomMessage');
		if (chatroomMessage.querySelectorAll('.inner') != 'undefind') {
			chatroomPanel.querySelector('.initial').style.display = 'none';
		}else{
			chatroomPanel.querySelector('.initial').style.display = 'block';
		}
	}
	init();
	(function(){		// toolbar的切换
		var toolbarItem = document.querySelectorAll('.chat-item a.chat');
		var contentList = document.querySelectorAll('.content-left>div');
		
		var len = toolbarItem.length;
		var index = 0;
		
		for (var i=0;i<len;i++) {
			
			if (i == 0) {
				css(contentList[0], 'display', 'block');
			}else{
				css(contentList[i], 'display', 'none');
			}
			
			
			
			toolbarItem[i].index = i;
			toolbarItem[i].onclick = function(){
				for (var j=0;j<len;j++) {
					removeClass(toolbarItem[j], 'current');
					css(contentList[j], 'display', 'none');
				};
				addClass(this, 'current');
				css(contentList[this.index], 'display', 'block');
			}
		}
	})();
	
	(function(){		//显示用户头像card
		var userHeader = document.querySelector('#userHeader');

		userHeader.onclick = function(ev){
			var ev = ev || window.event;
			addClass(this, 'show');
			stopPropagation(ev);
		};
		this.onclick = function(ev){
			var ev = ev || window.event;
			stopPropagation(ev);
		};
		document.documentElement.onclick = function(){
			removeClass(userHeader, 'show');
		};
	})();
	
	(function(){		//联系人列表
		
		function tabContactsActive(obj){
			var contactsInner = document.querySelector(obj);
			var contactsList = contactsInner.querySelectorAll('li');
			var oneContactsHeight = css(contactsList[0], 'height');
			var len = contactsList.length;
			
			// 设置联系人列表的高度
			css(contactsInner, 'height', parseInt(oneContactsHeight)*len);
			
			// 鼠标点击事件
			for (var i=0;i<len;i++) {
				contactsList[i].onclick = function(){
					for (var j=0;j<len;j++) {
						removeClass(contactsList[j], 'active');
					}
					addClass(this, 'active');
				};
			}
		}
		
		tabContactsActive('.friends-wrapper .inner');
		tabContactsActive('.message-wrapper .inner');
		
	})();
}





var contacts = {
	"A" : [{
			"nikename" : "Jason",
			"headerImg" : "1.jpg",
			"address" : "广东 广州"
		},
		 {
			"nikename" : "65",
			"headerImg" : "1.jpg",
			"address" : "广东 广州"
		},
		 {
			"nikename" : "435",
			"headerImg" : "1.jpg",
			"address" : "广东 广州"
		}],
	"B" :  [{
			"nikename" : "23",
			"headerImg" : "1.jpg",
			"address" : "广东 广州"
		}]
}



























