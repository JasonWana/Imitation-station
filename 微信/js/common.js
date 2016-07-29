window.onload = load;

function load(){
	
	(function(){		// toolbar的切换
		var toolbarItem = document.querySelectorAll('.chat-item a.chat');
		var middleList = document.querySelectorAll('.middle-list>div');
		
		var len = toolbarItem.length;
		var index = 0;
		
		for (var i=0;i<len;i++) {
			
			if (i == 0) {
				css(middleList[0], 'display', 'block');
			}else{
				css(middleList[i], 'display', 'none');
			}
			
			
			
			toolbarItem[i].index = i;
			toolbarItem[i].onclick = function(){
				for (var j=0;j<len;j++) {
					removeClass(toolbarItem[j], 'current');
					css(middleList[j], 'display', 'none');
				};
				addClass(this, 'current');
				css(middleList[this.index], 'display', 'block');
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
		
		tabContactsActive('.friends-wrap .inner');
		tabContactsActive('.message-wrap .inner');
		
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


console.log(contacts.A);

























