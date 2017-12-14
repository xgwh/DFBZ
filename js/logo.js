window.onload=function(){
	var logo=document.getElementsByClassName("logo")[0];
	var aside=document.getElementsByTagName("aside")[0];
	aside.style.height=screen.availHeight+"px";
	var a=0;
	function add(){
		a+=1;
	}
	setInterval(function (){
		add();
		if(a%2==0){
			logo.className="logo2 logo";
		}else{
			logo.className="logo1 logo";
		}
		if(a==3){
			a=-1;
		}
	},3000)
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
		top=document.documentElement.scrollTop || document.body.scrollTop;
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
		if(top==0){
			clearTimeout(t);
		}
	}
	var none=document.getElementsByClassName("nav1");
	for(var i=0;i<none.length;i++){
		none[i].style.height=screen.availHeight+"px";
	}
	var inputs=document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){
		inputs[i].onfocus=function(){
			this.style.border="1px solid red";
		}
		inputs[i].onblur=function(){
			this.style.border="1px solid #ddd";
		}
	}
	var map_a=document.getElementsByTagName("section")[0].getElementsByTagName("a")[1];
	var li_aobj=document.getElementsByClassName("aside_a");
	var li_obj=document.getElementsByTagName("aside")[0].getElementsByTagName("li");
	for(var i=0;i<li_aobj.length;i++){
		if(map_a.innerText==li_aobj[i].innerText){
			li_aobj[i].className="this";
		}
	}
	var nav_img=document.getElementsByClassName("nav_img")[0].getElementsByTagName("img");
	setInterval(function(){
		if(nav_img[0].style.display=="none"){
			nav_img[0].style.display="block"
		}else{
			nav_img[0].style.display="none"
		}
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
					atext[i].href="../index.html";
				}
				if(atext[i].innerHTML=="车型展示"){
					atext[i].href="exhibit.html";
				}
				if(atext[i].innerHTML=="购车助手"){
					atext[i].href="order.html";
				}
				if(atext[i].innerHTML=="经销商查询"){
					atext[i].href="dealer.html";
				}
				if(atext[i].innerHTML=="车主服务"){
					atext[i].href="serve.html";
				}
				if(atext[i].innerHTML=="品牌天地"){
					atext[i].href="world.html";
				}
				if(atext[i].innerHTML=="金融服务"){
					atext[i].href="guide.html";
				}
			}
}
