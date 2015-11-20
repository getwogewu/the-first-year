function css(obj, attr, value) {
	if (arguments.length === 2) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}

	} else if (arguments.length === 3) {
		obj.style[attr] = value;
	}
}


var swap = document.getElementById('swap');
var map_real = document.getElementById('map-real');
var map_pic = document.getElementById('map-pic');
var btn_map_real = document.getElementById('btn-map-real');
var btn_map_pic = document.getElementById('btn-map-pic');
var big_map = document.getElementById('big-map');
var small_map = document.getElementById('small-map');
var map_select = document.getElementById('map-select');
var wait = false;
var back = false;



function Move_() { //拖动图片

	== = true; //允许拖动
	var position1 = parseInt(css(map_select, 'marginLeft'));
	var position2 = parseInt(css(map_select, 'marginTop'));
	var p_width = parseInt(css(small_map, 'width'));
	var p_height = parseInt(css(small_map, 'height'));
	console.log(p_width);
	var x = event.clientX; //触发事件时鼠标x坐标
	var y = event.clientY; //触发事件时鼠标y坐标
	if (parseInt(css(map_select, 'marginLeft')) <= 3) {
		map_select.style.marginLeft = '8px';
	}
	if (parseInt(css(map_select, 'marginTop')) <= 3) {
		map_select.style.marginTop = '8px';
	}
	if (parseInt(css(map_select, 'marginLeft')) >= 90) {
		map_select.style.marginLeft = '85px';
	}
	if (parseInt(css(map_select, 'marginTop')) >= 70) {
		map_select.style.marginTop = '65px';
	}
	document.onmousemove = function() {

		if (!drag) return false;
		var mL = position1 + event.clientX - x + 'px';
		var mT = position2 + event.clientY - y + 'px';

		console.log('L' + parseInt(css(map_select, 'marginLeft')));
		console.log('T' + parseInt(css(map_select, 'marginTop')));
		if (parseInt(css(map_select, 'marginLeft')) <= 3 || parseInt(css(map_select, 'marginTop')) <= 3 || parseInt(css(map_select, 'marginLeft')) >= 90 || parseInt(css(map_select, 'marginTop')) >= 70) {
			drag = false;
		} else {
			var mL_1 = parseInt(mL) + 'px';
			var mT_1 = parseInt(mT) + 'px';
			var mL_2 = parseInt(mL) * 20 + 'px';
			var mT_2 = parseInt(mT) * 22 + 'px';
			map_select.style.marginLeft = mL;
			big_map.style.marginLeft = '-' + mL_2;
			map_select.style.marginTop = mT;
			big_map.style.marginTop = '-' + mT_2;
		}

		return false;
	}
	return false;

}
map_select.onmousedown = Move_;
map_select.onmouseup = function() {
	drag = false;
}



function animate(move) {
	wait = true;
	var time = 300;
	var interval = 10;
	var speed;
	var last = parseFloat(swap.style.left) + move;

	function flash() {
		speed = (last - parseFloat(swap.style.left)) / (time / interval);
		if (speed > 0) {
			speed = Math.ceil(speed)
		};
		if (speed < 0) {
			speed = Math.floor(speed)
		};
		if ((speed > 0 && parseFloat(swap.style.left) < last) || (speed < 0 && parseFloat(swap.style.left) > last)) {
			swap.style.left = parseFloat(swap.style.left) + speed + 'px';
			setTimeout(flash, interval);
		} else {
			wait = false;
			if (swap.style.left == -913 + 'px') {
				wait = false;
				back = true;
			}
			if (swap.style.left == 0 + 'px') {
				wait = false;
				back = false;
			};
		}
	}
	flash();
}
btn_map_real.onclick = function() {
	if (!wait && !back) {
		animate(-913);
		console.log(1);
		btn_map_pic.className = "btn";
		btn_map_real.className = "btn btn-active";
	}

}
btn_map_pic.onclick = function() {
	if (!wait && back) {
		animate(913);
		btn_map_pic.className = "btn btn-active";
		btn_map_real.className = "btn";
	}

}