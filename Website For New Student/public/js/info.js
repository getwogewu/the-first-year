var pre = document.getElementById('pre');
var next = document.getElementById('next');
var pre2 = document.getElementById('pre2');
var next2 = document.getElementById('next2');
var pre3 = document.getElementById('pre3');
var next3 = document.getElementById('next3');
var pre4 = document.getElementById('pre4');
var next4 = document.getElementById('next4');
var pre5 = document.getElementById('pre5');
var next5 = document.getElementById('next5');
var pre6 = document.getElementById('pre6');
var next6 = document.getElementById('next6');
var button = document.getElementsByTagName('button');
var left = document.getElementById('left');
var right = document.getElementById('right');
var new_cat = document.getElementById('new_cat');
var sch_ori = document.getElementById('sch_ori');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');
var box10 = document.getElementById('box10');
var box11 = document.getElementById('box11');
var box12 = document.getElementById('box12');
var box13 = document.getElementById('box13');
var gro_info_p1 = document.getElementById('gro_info_p1');
var gro_info_p2 = document.getElementById('gro_info_p2');
var eat_live_center1 = document.getElementById('eat_live_center1');
var eat_live_center2 = document.getElementById('eat_live_center2');
var tuanwei_center1 = document.getElementById('tuanwei_center1');
var tuanwei_center2 = document.getElementById('tuanwei_center2');
var xiaoxue_center1 = document.getElementById('xiaoxue_center1');
var xiaoxue_center2 = document.getElementById('xiaoxue_center2');
var xiaoxue_center3 = document.getElementById('xiaoxue_center3');
var kelian_center1 = document.getElementById('kelian_center1');
var kelian_center2 = document.getElementById('kelian_center2');
var qingxie_center1 = document.getElementById('qingxie_center1');
var qingxie_center2 = document.getElementById('qingxie_center2');
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num2_1 = document.getElementById('num2_1');
var num2_2 = document.getElementById('num2_2');
var num2_3 = document.getElementById('num2_3');
var num2_4 = document.getElementById('num2_4');
var num2_5 = document.getElementById('num2_5');
var stu_nav = document.getElementById('stu-nav').getElementsByTagName('li');
var ori_nav = document.getElementById('ori-nav').getElementsByTagName('li');

stu_nav[1].onclick = function(){
	box1.style.display = "none";
	box2.style.display = "block";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";

	stu_nav[0].className = "snav";
	stu_nav[1].className = "snav snav-active";
	stu_nav[2].className = "snav";
	stu_nav[3].className = "snav";
	stu_nav[4].className = "snav";
	stu_nav[5].className = "snav";
}	

stu_nav[0].onclick = function(){
	box1.style.display = "block";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";

	stu_nav[0].className = "snav snav-active";
	stu_nav[1].className = "snav";
	stu_nav[2].className = "snav";
	stu_nav[3].className = "snav";
	stu_nav[4].className = "snav";
	stu_nav[5].className = "snav";
}	

stu_nav[2].onclick = function(){
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "block";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "none";

	stu_nav[0].className = "snav";
	stu_nav[1].className = "snav";
	stu_nav[2].className = "snav snav-active";
	stu_nav[3].className = "snav";
	stu_nav[4].className = "snav";
	stu_nav[5].className = "snav";
}	

stu_nav[3].onclick = function(){
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "block";
	box5.style.display = "none";
	box6.style.display = "none";

	stu_nav[0].className = "snav";
	stu_nav[1].className = "snav";
	stu_nav[2].className = "snav";
	stu_nav[3].className = "snav snav-active";
	stu_nav[4].className = "snav";
	stu_nav[5].className = "snav";
}	

stu_nav[4].onclick = function(){
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "block";
	box6.style.display = "none";

	stu_nav[0].className = "snav";
	stu_nav[1].className = "snav";
	stu_nav[2].className = "snav";
	stu_nav[3].className = "snav";
	stu_nav[4].className = "snav snav-active";
	stu_nav[5].className = "snav";
}	

stu_nav[5].onclick = function(){
	box1.style.display = "none";
	box2.style.display = "none";
	box3.style.display = "none";
	box4.style.display = "none";
	box5.style.display = "none";
	box6.style.display = "block";

	stu_nav[0].className = "snav";
	stu_nav[1].className = "snav";
	stu_nav[2].className = "snav";
	stu_nav[3].className = "snav";
	stu_nav[4].className = "snav";
	stu_nav[5].className = "snav snav-active";
}	


ori_nav[0].onclick = function(){
	box7.style.display = "block";
	box8.style.display = "none";
	box9.style.display = "none";
	box10.style.display = "none";
	box11.style.display = "none";
	box12.style.display = "none";
	box13.style.display = "none";

	ori_nav[0].className = "sori sori-active";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori";
}

ori_nav[1].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "block";
	box9.style.display = "none";
	box10.style.display = "none";
	box11.style.display = "none";
	box12.style.display = "none";
	box13.style.display = "none";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori sori-active";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori";
}

ori_nav[2].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "none";
	box9.style.display = "block";
	box10.style.display = "none";
	box11.style.display = "none";
	box12.style.display = "none";
	box13.style.display = "none";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori sori-active";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori";
}

ori_nav[3].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "none";
	box9.style.display = "none";
	box10.style.display = "block";
	box11.style.display = "none";
	box12.style.display = "none";
	box13.style.display = "none";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori sori-active";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori";
}

ori_nav[4].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "none";
	box9.style.display = "none";
	box10.style.display = "none";
	box11.style.display = "block";
	box12.style.display = "none";
	box13.style.display = "none";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori sori-active";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori";
}

ori_nav[5].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "none";
	box9.style.display = "none";
	box10.style.display = "none";
	box11.style.display = "none";
	box12.style.display = "block";
	box13.style.display = "none";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori sori-active";
	ori_nav[6].className = "sori";
}

ori_nav[6].onclick = function(){
	box7.style.display = "none";
	box8.style.display = "none";
	box9.style.display = "none";
	box10.style.display = "none";
	box11.style.display = "none";
	box12.style.display = "none";
	box13.style.display = "block";

	ori_nav[0].className = "sori";
	ori_nav[1].className = "sori";
	ori_nav[2].className = "sori";
	ori_nav[3].className = "sori";
	ori_nav[4].className = "sori";
	ori_nav[5].className = "sori";
	ori_nav[6].className = "sori sori-active";
}




left.onclick = function(){
	new_cat.style.display = "block";
	sch_ori.style.display = "none";
	left.className = "btn btn-active";
	right.className = "btn";
}

right.onclick = function(){
	new_cat.style.display = "none";
	sch_ori.style.display = "block";
	left.className = "btn";
	right.className = "btn btn-active";
}

pre.onclick = function(){
	gro_info_p1.style.display = "block";
	gro_info_p2.style.display = "none";
	num2.className = "num";
}
next.onclick = function() {
	gro_info_p1.style.display = "none";
	gro_info_p2.style.display = "block";
	num2.className = "num num_active";
}

pre2.onclick = function(){
	eat_live_center1.style.display = "block";
	eat_live_center2.style.display = "none";
	num2_1.className = "num";
}
next2.onclick = function(){
	eat_live_center1.style.display = "none";
	eat_live_center2.style.display = "block";
	num2_1.className = "num num_active";
}
pre3.onclick = function(){
	tuanwei_center1.style.display = "block";
	tuanwei_center2.style.display = "none";
	num2_2.className = "num";
}
next3.onclick = function(){
	tuanwei_center1.style.display = "none";
	tuanwei_center2.style.display = "block";
	num2_2.className = "num num_active"
}
pre4.onclick = function(){
	xiaoxue_center1.style.display = "block";
	xiaoxue_center2.style.display = "none";
	num2_3.className = "num";
}
next4.onclick = function(){
	xiaoxue_center1.style.display = "none";
	xiaoxue_center2.style.display = "block";
	num2_3.className = " num num_active";
	next4.onclick = function(){
		xiaoxue_center2.style.display = "none";
		xiaoxue_center3.style.display = "block";
		num3_3.className = "num num_active";
		pre4.onclick = function(){
			xiaoxue_center3.style.display = "none";
			xiaoxue_center2.style.display = "block"
			num3_3.className = "num";
			pre4.onclick = function(){
				xiaoxue_center2.style.display = "none";
				xiaoxue_center1.style.display = "block";
				num2_3.className = "num";

	}
		}
	}
	pre4.onclick = function(){
		xiaoxue_center2.style.display = "none";
		xiaoxue_center1.style.display = "block";
		num2_3.className = "num";

	}
}
pre5.onclick = function(){
	kelian_center1.style.display = "block";
	kelian_center2.style.display = "none";
	num2_4.className = "num";
}
next5.onclick = function(){
	kelian_center1.style.display = "none";
	kelian_center2.style.display = "block";
}
pre6.onclick = function(){
	qingxie_center1.style.display = "block";
	qingxie_center2.style.display = "none";
	num2_5.className = "num";
}
next6.onclick = function(){
	qingxie_center1.style.display = "none";
	qingxie_center2.style.display = "block";
	num2_5.className = "num num_active";
}




