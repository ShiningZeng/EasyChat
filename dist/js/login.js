window.onload = function() {
	var loginForm = document.getElementById('loginForm');
	var loginRemainder = document.getElementById('login-remainder');
	loginForm.onsubmit = function() {
		var flag = true;
		var tmp = loginForm.elements;
		for (var i in tmp) {
			if(tmp[i].value === '') {
				loginRemainder.innerText = '输入内容不能为空';
				flag = false;
			}
		}
		console.log(tmp[0], tmp[1]);
		return flag;
	};
};