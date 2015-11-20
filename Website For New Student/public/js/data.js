var btn_friend = document.getElementById('btn-friend-pic');//找朋友按钮
var btn_data = document.getElementById('btn-data-pic');//找数据按钮
var find_all = document.getElementById('find_friend');//找朋友内容
var data_all = document.getElementById('big_data');
var find_nav = find_all.getElementsByTagName('li');
//var find_nav = find_all.childNodes;
var find_info_all = document.getElementById('fri-info');
var find_info =find_info_all.getElementsByTagName('div');;
var paga_nav =document.getElementById('change-center');
//var j = find_nav[j].index;
var data_nav = data_all.getElementsByTagName('li');
var data_info_all = document.getElementById('data_info');
var chart =document.getElementById('chart');
var show =document.getElementById('show');
var show_home =document.getElementById('show-home');
var show_sex=document.getElementById('show-sex');
var birth =document.getElementById('birth');
var time =document.getElementById('time');
var study = document.getElementById('study');
var gra =document.getElementById('gra');

// 找朋友
btn_friend.onclick=function(){
	btn_friend.className = "btn btn_active ";
	btn_data.className ="btn";
	find_all.style.display ="block";
	data_all.style.display ="none";
	var i;
	for(i=0;i<3;i++){
		find_nav[i].className = "fnav";
		find_info[i].style.display ="none";
	}
	find_nav[3].className = "fnav";
	find_info[19].style.display ="none";
    find_nav[0].className = "fnav nav_active";
    find_info[0].style.display ="block";
    paga_nav.style.display ="block";
} 


var j;
for(j=0;j<3;j++){
	find_nav[j].index = j;
	find_nav[j].onclick=function(){
		for(i=0;i<3;i++){
			find_nav[i].className = "fnav";
			find_info[i].style.display ="none";
		}
		find_info[19].style.display = "none";
		find_nav[3].className = "fnav";
		this.className = "fnav nav_active";
		find_info[this.index].style.display ="block";
		paga_nav.style.display ="block";
	}
}	
find_nav[3].onclick=function(){
	for(i=0;i<3;i++){
			find_nav[i].className = "fnav";
			find_info[i].style.display ="none";
		}
	find_info[19].style.display="block";
	find_nav[3].className="fnav nav_active";
	paga_nav.style.display ="block";
}


// var j;
// for(j=0;j<find_nav.length;j++){
// 	if(find_nav[j].nodeName=="#text"){
// 		continue;
// 	}
// 	find_nav[j].index = j;
// 	find_nav.onclick=function(){
// 		var i;
// 		for(i=0;i<find_info.length;i++){
// 			find_nav[i].className = "fnav";
// 			find_info[i].style.display ="none";
// 		}
// 		this.className = "fnav nav_active";
// 		find_info[this.index].style.display ="block";
// 	}
// }
// 大数据
btn_data.onclick=function(){
	btn_friend.className = "btn ";
	btn_data.className ="btn btn_active";
	find_all.style.display ="none";
	data_all.style.display ="block";
	paga_nav.style.display ="none";
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[0].className = "dnav nav_active";
	data_info_all.style.display="block";
	chart.style.display="block";
	show.style.display = "block";
	show_home.style.display ="block";
	show_sex.style.display ="none";
	birth.style.display ="none";
	time.style.display="none";
}
data_nav[0].onclick=function(){
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[0].className = "dnav nav_active";
	data_info_all.style.display="block";
	chart.style.display="block";
	show.style.display = "block";
	show_home.style.display ="block";
	show_sex.style.display ="none";
	birth.style.display ="none";
	time.style.display="none";
}
data_nav[1].onclick=function(){
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[1].className = "dnav nav_active";
	data_info_all.style.display="block";
	chart.style.display="block";
	show.style.display = "block";
	show_home.style.display ="none";
	show_sex.style.display ="block";
	birth.style.display ="none";
	time.style.display="none";
}
data_nav[2].onclick=function(){
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[2].className = "dnav nav_active";
	data_info_all.style.display="block";
	chart.style.display="block";
	show.style.display = "block";
	show_home.style.display ="none";
	show_sex.style.display ="none";
	birth.style.display ="block";
	time.style.display="none";
}
data_nav[3].onclick=function(){
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[3].className = "dnav nav_active";
	chart.style.display="none";
	show.style.display = "none";
	time.style.display="block";
	study.style.display="block";
	gra.style.display="none"
}
data_nav[4].onclick=function(){
	for(var i=0;i<data_nav.length;i++){
		data_nav[i].className ="dnav";
	}
	data_nav[4].className = "dnav nav_active";
	chart.style.display="none";
	show.style.display = "none";
	time.style.display="block";
	study.style.display="none";
	 gra.style.display="block";
}
// var n;
// for(n=0;n<3;n++){
// 	data_nav[n].index=n;
// 	data_nav[n].onclick=function(){
// 		for(var i=0;i<3;i++){
// 			data_nav[i].className="dnav";
// 			show_info[i*2].style.display="none";
// 		}
// 		this.className = "dnav nav_active";
// 		show_info[n+1].style.display="block";
// 	}
// }