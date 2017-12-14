window.onload = function() {
	var aside=document.getElementsByTagName("aside")[0];
	var logo=document.getElementsByClassName("logo")[0];
	var a=0;
	var banner=document.getElementById("banner");
	var pro=document.getElementsByTagName("label");
	var sele=document.getElementsByTagName("select");
	var logo=document.getElementsByClassName("logo")[0];
	logo.className="logo logo1";
	var nav1=document.getElementsByClassName("nav1");
	aside.style.height=screen.availHeight+"px";
	for(var i=0;i<nav1.length;i++){
		nav1[i].style.height=screen.availHeight+"px";
	}
	
	logo.className="logo logo1";
	/*a+=1*/
	function add(){
		a+=1;
	}
	/*a-=1*/
	function equal(){
		a-=1;
	}
	t=setInterval(function (){
		add();
		if(a%2==0){
			logo.className="logo2 logo";
		}else{
			logo.className="logo1 logo";
		}
		banner.style.left=-a*100+"%";
		if(a==3){
			a=-1;
		}
	},3000)
	function clear(){
		clearTimeout(t);
	}
	function time(){
		t=setInterval(function (){
		add();
		if(a%2==0){
			logo.className="logo2 logo";
		}else{
			logo.className="logo1 logo";
		}
		banner.style.left=-a*100+"%";
		if(a==3){
			a=-1;
		}
	},3000)
	}
	document.getElementById("prev").onmouseover=function(){
		clear();
	}
	document.getElementById("prev").onmouseout=function(){
		time();
	}
	document.getElementById("next").onmouseover=function(){
		clear();
	}
	document.getElementById("next").onmouseout=function(){
		time();
	}
	document.getElementById("next").onclick=function(){
		banner.style.left=-a*100+"%";
		if(a>=3){
			a=-1;
		}
		add();
	}
	document.getElementById("prev").onclick=function (){
		equal();
		if(a==-1){
			a=4;
			banner.style.left=0;
		}else{
			banner.style.left=-a*100+"%";
		}
	}
	var tiny=document.getElementsByClassName("tiny")[0];
	var flag=document.getElementsByClassName("flag")[0];
	var mic=document.getElementsByClassName("mic")[0];
	var imgs=tiny.getElementsByTagName("img");
	imgs[0].onmouseover=function(){
		mic.style.display="block";
	}
	imgs[0].onmouseout=function(){
		mic.style.display="none";
	}
	imgs[2].onmouseover=function(){
		flag.style.display="block";
	}
	imgs[2].onmouseout=setInterval(function(){
		flag.style.display="none";
	},3000)
	var up=document.getElementsByClassName("up")[0];
	var top=0;
	var tt=0;
	setInterval(function(){
		top=document.body.scrollTop+document.documentElement.scrollTop;
		if(top>400){
			up.style.display="block";
		}else{
			up.style.display="none";
		}
		tt=top;
	},1)
	var t;
	up.onclick=function roof(){
		tt-=10;
		t=setTimeout(roof,1);
		document.body.scrollTop=tt;
		document.documentElement.scrollTop=tt;
		if(top==0){
			clearTimeout(t);
		}
	}
	var banners=document.getElementsByClassName("banner")[0];
	setInterval(function(){
		var height=document.documentElement.clientWidth/2.304;
		banners.style.height=height+"px";
	},1);
	var nav_img=document.getElementsByClassName("nav_img")[0].getElementsByTagName("img");
	setInterval(function(){
		if(nav_img[0].style.display=="none"){
			nav_img[0].style.display="block"
		}else{
			nav_img[0].style.display="none"
		}
	},3000)
	var min_banner=document.getElementsByClassName("five")[0].getElementsByTagName("ul")[0];
	var min_banner_a=document.getElementsByClassName("p_a")[0].getElementsByTagName("a");
	var z=0;
	min_banner_a[z].style.background="#40A1E2";
	setInterval(function(){
		z+=1;
		if(z==3){
			z=0;
		}
		for(var i=0;i<min_banner_a.length;i++){
			min_banner_a[i].inner=i;
			min_banner_a[i].style.background="#CDCDCD";
			min_banner_a[i].onclick=function(){
				for(var i=0;i<min_banner_a.length;i++){
					min_banner_a[i].style.background="#CDCDCD";
				}
				min_banner.style.marginLeft=-this.inner*100+"%";
				this.style.background="#40A1E2";
			}
		}
		min_banner_a[z].style.background="#40A1E2";
		min_banner.style.marginLeft=-z*100+"%";	
	},3000);
	/*浏览器宽度在990-1135之间时改变section宽度*/
	setInterval(function(){
		if(document.documentElement.clientWidth>990 && document.documentElement.clientWidth<1135){
			document.getElementsByTagName("section")[0].style.width=
			document.documentElement.clientWidth-152+"px";
		}
		if(document.getElementsByClassName("box")[0].clientWidth>1135){
			document.getElementsByTagName("section")[0].style.width=
			document.getElementsByClassName("box")[0].clientWidth-152+"px";
		}
	},1)
	var atext=document.getElementsByTagName("a");
			for(var i=0;i<atext.length;i++){
				if(atext[i].innerHTML=="首页"){
					atext[i].href="index.html";
				}
				if(atext[i].innerHTML=="车型展示"){
					atext[i].href="标志/exhibit.html";
				}
				if(atext[i].innerHTML=="购车助手"){
					atext[i].href="标志/order.html";
				}
				if(atext[i].innerHTML=="经销商查询"){
					atext[i].href="标志/dealer.html";
				}
				if(atext[i].innerHTML=="车主服务"){
					atext[i].href="标志/serve.html";
				}
				if(atext[i].innerHTML=="品牌天地"){
					atext[i].href="标志/world.html";
				}
				if(atext[i].innerHTML=="金融服务"){
					atext[i].href="标志/guide.html";
				}
			}
}




















