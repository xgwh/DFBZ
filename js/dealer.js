window.onload = function() {
	var aside = document.getElementsByTagName("aside")[0];
	var logo = document.getElementsByClassName("logo")[0];
	var a = 0;
	var banner = document.getElementById("banner");
	var pro = document.getElementsByTagName("label");
	var sele = document.getElementsByTagName("select");
	var logo = document.getElementsByClassName("logo")[0];
	logo.className = "logo logo1";
	var nav1 = document.getElementsByClassName("nav1");
	aside.style.height = "80px";
	for(var i = 0; i < nav1.length; i++) {
		nav1[i].style.height = screen.availHeight + "px";
	}

	logo.className = "logo logo1";
	/*a+=1*/
	function add() {
		a += 1;
	}
	/*a-=1*/
	function equal() {
		a -= 1;
	}
	t = setInterval(function() {
		add();
		if(a % 2 == 0) {
			logo.className = "logo2 logo";
		} else {
			logo.className = "logo1 logo";
		}
		banner.style.left = -a * 100 + "%";
		if(a == 3) {
			a = -1;
		}
	}, 3000)

	function clear() {
		clearTimeout(t);
	}

	function time() {
		t = setInterval(function() {
			add();
			if(a % 2 == 0) {
				logo.className = "logo2 logo";
			} else {
				logo.className = "logo1 logo";
			}
			banner.style.left = -a * 100 + "%";
			if(a == 3) {
				a = -1;
			}
		}, 3000)
	}
	document.getElementById("prev").onmouseover = function() {
		clear();
	}
	document.getElementById("prev").onmouseout = function() {
		time();
	}
	document.getElementById("next").onmouseover = function() {
		clear();
	}
	document.getElementById("next").onmouseout = function() {
		time();
	}
	document.getElementById("next").onclick = function() {
		banner.style.left = -a * 100 + "%";
		if(a >= 3) {
			a = -1;
		}
		add();
	}
	document.getElementById("prev").onclick = function() {
		equal();
		if(a == -1) {
			a = 4;
			banner.style.left = 0;
		} else {
			banner.style.left = -a * 100 + "%";
		}
	}
	var tiny = document.getElementsByClassName("tiny")[0];
	var flag = document.getElementsByClassName("flag")[0];
	var mic = document.getElementsByClassName("mic")[0];
	var imgs = tiny.getElementsByTagName("img");
	imgs[0].onmouseover = function() {
		mic.style.display = "block";
	}
	imgs[0].onmouseout = function() {
		mic.style.display = "none";
	}
	imgs[2].onmouseover = function() {
		flag.style.display = "block";
	}
	imgs[2].onmouseout = setInterval(function() {
		flag.style.display = "none";
	}, 3000)
	var up = document.getElementsByClassName("up")[0];
	var top = 0;
	var tt = 0;
	setInterval(function() {
		top = document.documentElement.scrollTop || document.body.scrollTop;
		if(top > 400) {
			up.style.display = "block";
		} else {
			up.style.display = "none";
		}
		tt = top;
	}, 1)
	var t;
	up.onclick = function roof() {
		tt -= 10;
		t = setTimeout(roof, 1);
		document.body.scrollTop = tt;
		document.documentElement.scrollTop=tt;
		if(top == 0) {
			clearTimeout(t);
		}
	}
	var map_a = document.getElementsByTagName("section")[0].getElementsByTagName("a")[2];
	var li_aobj = document.getElementsByClassName("aside_a");
	var li_obj = document.getElementsByTagName("aside")[0].getElementsByTagName("li");
	for(var i = 0; i < li_aobj.length; i++) {
		if(map_a.innerText == li_aobj[i].innerText) {
			li_aobj[i].className = "this";
		}
	}
	var banners = document.getElementsByClassName("banner")[0];
	setInterval(function() {
		var height = document.documentElement.clientWidth / 2.304;
		banners.style.height = height + "px";
	}, 1);
	var atext = document.getElementsByTagName("a");
	for(var i = 0; i < atext.length; i++) {
		if(atext[i].innerHTML == "首页") {
			atext[i].href = "../index.html";
		}
		if(atext[i].innerHTML == "车型展示") {
			atext[i].href = "exhibit.html";
		}
		if(atext[i].innerHTML == "购车助手") {
			atext[i].href = "order.html";
		}
		if(atext[i].innerHTML == "经销商查询") {
			atext[i].href = "dealer.html";
		}
		if(atext[i].innerHTML == "车主服务") {
			atext[i].href = "serve.html";
		}
		if(atext[i].innerHTML == "品牌天地") {
			atext[i].href = "world.html";
		}
		if(atext[i].innerHTML == "金融服务") {
			atext[i].href = "guide.html";
		}
	}
	var dealer_nav = document.getElementsByClassName("dealer_nav")[0];
	var map_nav = document.getElementsByClassName("map_nav")[0];
	setInterval(function() {
		var start = document.body.scrollTop + document.documentElement.scrollTop;
		document.getElementsByTagName("body")[0].onscroll = function() {
			if(start - (document.body.scrollTop + document.documentElement.scrollTop) > 0) {
				if(document.body.scrollTop > 492 || document.documentElement.scrollTop>492) {
					dealer_nav.className = "fixed dealer_nav";
				} else {
					dealer_nav.className = "dealer_nav";
				}
			} else {
				dealer_nav.className = "dealer_nav";
			}
			if(start - (document.body.scrollTop + document.documentElement.scrollTop) < 0) {
				if(document.body.scrollTop > 492 || document.documentElement.scrollTop>492 && (document.body.offsetHeight - (document.body.scrollTop + document.documentElement.scrollTop) > 1173)) {
					map_nav.className = "map_nav fixed_bottom"
				} else {
					map_nav.className = "map_nav"
				}
			} else {
				map_nav.className = "map_nav"
			}
		}
		dealer_nav.style.width=document.getElementsByTagName("section")[0].offsetWidth+"px";
		map_nav.style.width=document.getElementsByTagName("section")[0].offsetWidth+"px";
	}, 1)
}