var prev = document.getElementById('prev');
var next = document.getElementById('next');
var pic = document.getElementById('pic');
var wait = false;
var timer;

function animate(move) {
	wait = true;
	var time = 300;
	var interval = 10;
	var speed;
	var last = parseFloat(pic.style.left) + move;

	function flash() {
		speed = (last - parseFloat(pic.style.left)) / (time / interval);
		if (speed > 0) {
			speed = Math.ceil(speed)
		};
		if (speed < 0) {
			speed = Math.floor(speed)
		};
		if ((speed > 0 && parseFloat(pic.style.left) < last) || (speed < 0 && parseFloat(pic.style.left) > last)) {
			pic.style.left = parseFloat(pic.style.left) + speed + 'px';
			setTimeout(flash, interval);
		} else {
			wait = false;
			pic.style.left = last + 'px';
			if (pic.style.left == -2988 + 'px') {
				pic.style.left = -747 + 'px';
			}
			if (pic.style.left == 0 + 'px') {
				pic.style.left == -2214 + 'px';
			};
		}
	}
	flash();
}
next.onclick = function() {
	if (!wait) {
		animate(-747);
	}
}
prev.onclick = function() {
	if (!wait) {
		animate(747);
	}
}
function startFlash() {
	setTimeout(function() {
		next.onclick();
		startFlash();
	}, 3000);
}
startFlash();