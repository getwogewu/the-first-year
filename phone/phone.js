var list = document.getElementById('list');
var shadow = document.getElementById('shadow');
var sure = document.getElementById('sure');
var cancel = document.getElementById('cancel');
var select = document.getElementById('select');
var li = select.getElementsByTagName('li');

list.addEventListener("touchstart",function(){
	//shadow.style.display = "block";
	shadow.style.zIndex = 123;
	shadow.style.height = "120%";
	select.style.height = "100%";
	select.style.opacity = "1";
},false)

// list.onclick = function(){
// 	shadow.style.display = "block";
// 	shadow.style.zIndex = 123;
// 	shadow.style.height = "120%";
// 	select.style.height = "100%";
// 	select.style.opacity = "1";
// }

cancel.addEventListener("touchstart",function(){
	select.style.height = "0";
	select.style.opacity = "0";
	//shadow.style.display = "none";
	shadow.style.zIndex = 0;
	shadow.style.height = "0";
},false)

// cancel.onclick = function(){
// 	select.style.height = "0";
// 	select.style.opacity = "0";
// 	shadow.style.display = "none";
// 	shadow.style.zIndex = 0;
// 	shadow.style.height = "0";
// }
 // for(var i=1, len =li.length; i<len; i++){
	// 		   li[i].addEventListener("click",function(){
	// 		 		var a = this.getElementsByTagName('span');
	// 		 		if(a[0].innerHTML==" "){
	// 		 			a[0].innerHTML = "&#8730;";
	// 		 			return false;
	// 		 		}else {
	// 		 			a[0].innerHTML=" ";
	// 		 		}
	// 		 	},false);
	// 		}

 for(var i=0;i<li.length;i++){
 	li[i].addEventListener("touchend", function(){
 		var a = this.getElementsByTagName('span');
 		if(a[0].innerHTML==" "){
 			a[0].innerHTML = "&#8730;";
 			return false;
 		}else {
 			a[0].innerHTML=" ";
 		}
 	},false)
 }






