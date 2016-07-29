window.onload = load;

function load(){
	
	(function logining(){
		var loginBtn = document.querySelector('#loginBtn');
		var passWord = document.querySelector('#password');
		var loginForm =document.querySelector('.login-form');
		
		document.onkeydown = function(ev){
			var ev = ev || window.event;
			if (ev.keyCode == 13) {
				loginBtn.click();
			}
		}
		loginBtn.onclick = function(){
			// 密码为空时, 不执行登录操作
			if (passWord.value == ''){
				addClass(passWord, 'warning');
				passWord.focus();
				return false;
			}else{// 密码不空时执行代码
				
			}
			
		};
		loginForm.onmouseover = function(){
			passWord.setAttribute('class','show');
			passWord.focus();
		};
		loginForm.onmouseout = function(){
			passWord.setAttribute('class','');
			passWord.blur();
		};
		
		
		
	})();
	
	
	
	(function(){
		var replaceUser = document.querySelector('.replace-user');
		var loginWrap = document.querySelector('.login-wrap');
		var loginQR = document.querySelector('#loginQR');
		var fastLogin = document.querySelector('#fastLogin');
		replaceUser.onclick = function(){
			addClass(loginWrap, 'back');
		};
		
	})();
	
	
	(function(){
	
	})();
}
