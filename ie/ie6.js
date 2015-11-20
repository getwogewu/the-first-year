var container = document.getElementById('banner-container');//轮播块
var list =document.getElementById('list');//轮播图
var buttons = document.getElementById('buttons').getElementsByTagName('span');//小圆点
var prev = document.getElementById('prev');//向左
var next =document.getElementById('next');//向右
var len = 5;
var index = 1;
var wait = false
var flash;
var interval = 2000;
//图片切换

function animate(offset){ 
	wait = true;
	var time = 400;
	var inteval = 10;
	var speed  = offset/(time/inteval);
	var left =parseInt(list.style.left) + offset;
	//vae wait = false ;
	//切换动画
    var go = function(){
        if( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)){
        	list.style.left = parseInt(list.style.left) + speed + "px";
        	setTimeout(go,inteval);
        }else{
        	wait = false;
        	list.style.left  = left +"px";
		  	if(left > -980){
		  		list.style.left = -980*len +"px";
		  	};
		  	if(left<-980*len){
		  		list.style.left = -980 + "px";
        	}
    	}
  	}
  	go();
}

//按钮点击
function showButton(){
	for (var i=0 ;i<buttons.length ;i++){
		if(buttons[i].className== "on"){
			buttons[i].className = " radius";
			break;
		}
	}
	buttons[index-1].className = "on";
}

//触发箭头点击
next.onclick =function(){
	if(wait){
		return;
	}
	if(index == 5){
		index =1;
	}else{
		index +=1;
	}
	animate(-980);
	showButton();
}
prev.onclick =function(){
	if(wait){
		return;
	}
	if(index == 1){
		index =5;
	}else{
		index -=1;
	}
	animate(980);
	showButton();
}

// 触发按钮点击
for (var i=0 ;i<buttons.length;i++){
	buttons[i].onclick = function(){
		var myIndex = parseInt(this.getAttribute('index'));
	    offset = (myIndex - index) * -980;
		index = myIndex;
		showButton();
		animate(offset);
	}
}

//自动播放
function play (){
   flash = setTimeout(function(){
   	next.onclick();
   	play();
   },interval);
}
function stop(){
	clearTimeout(flash);
}

container.onmouseover = stop;
container.onmouseout = play;
play();



//:hover
//轮播导航栏
var ban_nav =document.getElementById('banner-nav');
var oDiv =ban_nav.getElementsByTagName('div');
var ul =ban_nav.getElementsByTagName('ul');
for(var j=0; j<oDiv.length-2;j++){
	if(j%2!=0){
		oDiv[j].index = j;
		oDiv[j].onmouseover=function(){
			for(var x=0;x<oDiv.length-1;x++){
				if(oDiv[x].className== "app-active"){
				oDiv[x].className = "app";
				break;
				}
			}
			for(var y=0;y<ul.length;y++){
				if(ul[y].style.display="block"){
					ul[y].style.display="none";
				}
			}
			this.className = "app-active";
			var num = parseInt(this.getAttribute('num'));
			//alert(j);
			//alert(this.index);
			//alert(num);
			ul[num].style.display ="block";

		}
	}
}