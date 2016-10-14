window.onload = function() {
	var init = function () {
		var selectphoto = document.getElementById('selectphoto');
		var defaultImg = "img/photo/photo1.jpg";
		var defaultUsername = "Bob";
		var container = document.createDocumentFragment();
		for (var i = 0; i < 3; i++)
			for (var j = 0; j < 3; j++) {
				var newImg = document.createElement('img');
				newImg.src = "img/photo/photo"+(3*j+i+1)+".jpg";
				newImg.className = "login-photo login-row"+i+" login-col"+j;
				container.appendChild(newImg);
			}
		selectphoto.appendChild(container);
		selectphoto.addEventListener('click', function(e) {
			e = e || window.event;//这一行及下一行是为兼容IE8及以下版本
			var target = e.target || e.srcElement;
			if(e.target && e.target.nodeName == 'IMG') {
		    }
		});
		this.login = function(event) {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4) {
					if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
						var data = JSON.parse(xhr.responseText);
						console.log(xhr.responseText);
					} else {
						console.log(" failed!");
					}
				}
			};
			xhr.open("post", "/login", true);
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			var data = "username="+"HHHHH"+"&photo="+defaultImg;
			xhr.send(data);
		};
	};
	init();
};