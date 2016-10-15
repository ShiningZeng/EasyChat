window.onload = function() {
	var init = function () {
		var selectphoto = document.getElementById('selectphoto');
		var registerForm = document.getElementById('registerForm');
		var registerRemainder = document.getElementById('register-remainder');
		var imgSrc = "img/photo/photo"+parseInt(Math.random()*9+1)+".jpg";
		registerForm.elements[0].value = imgSrc;
		var container = document.createDocumentFragment();
		for (var i = 0; i < 3; i++)
			for (var j = 0; j < 3; j++) {
				var newImg = document.createElement('img');
				newImg.src = "img/photo/photo"+(3*j+i+1)+".jpg";
				newImg.className = "register-photo register-row"+i+" register-col"+j;
				container.appendChild(newImg);
			}
		selectphoto.appendChild(container);
		selectphoto.addEventListener('click', function(e) {
			e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
			var target = e.target || e.srcElement;
			if(e.target && e.target.nodeName == 'IMG') {
				var photos = document.getElementsByClassName('register-photo');
				for (var i in photos) {
					var tmp = String(photos[i].className);
					photos[i].className = tmp.replace(' register-img-active', '');
				}
				e.target.className += " register-img-active";
				imgSrc = e.target.getAttribute("src");
				registerForm.elements[0].value = imgSrc;
		    }
		});

		registerForm.onsubmit = function() {
			var flag = true;
			var tmp = registerForm.elements;
			for (var i in tmp) {
				if(tmp[i].value === '') {
					registerRemainder.innerText = '输入内容不能为空';
					flag = false;
				}
			}
			if (tmp[2].value != tmp[3].value) {
				registerRemainder.innerText = '输入的密码不一致';
				flag = false;
			}
			return flag;
		};
	};
	init();
};