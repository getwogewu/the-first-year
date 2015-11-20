var day_f = document.getElementById('day-f');
var day_s = document.getElementById('day-s');
var hour_f = document.getElementById('hour-f');
var hour_s = document.getElementById('hour-s');
var min_f = document.getElementById('min-f');
var min_s = document.getElementById('min-s');
var sec_f = document.getElementById('sec-f');
var sec_s = document.getElementById('sec-s');
var src = '../public/num/'


var ctime = '',
	cday = '12',
	chour = '12',
	cmin = '01',
	csec = '11';


(function countDown() {
	cd = setTimeout(function() {
		csec--;
		if (!csec) {
			csec = '59';
			cmin--;
			if (!cmin) {
				cmin = '59';
				chour--;
				if (!chour) {
					chour = '59'
					cday--;
				}
			}
		}
		if (cday < 10) {
			ctime = '0' + cday + chour + cmin + csec;
		}
		if (chour < 10) {
			ctime = cday + '0' + chour + cmin + csec;
		}
		if (cmin < 10) {
			ctime = cday + chour + '0' + cmin + csec;
		}
		if (csec < 10) {
			ctime = cday + chour + cmin + '0' + csec;
		} else {
			ctime = cday + chour + cmin + csec;
		}
		console.log(ctime);
		var ctime_s = ctime.toString();
		// sec_s.innerHTML = ctime_s[7];
		// sec_f.innerHTML = ctime_s[6];
		// min_s.innerHTML = ctime_s[5];
		// min_f.innerHTML = ctime_s[4];
		// hour_s.innerHTML = ctime_s[3];
		// hour_f.innerHTML = ctime_s[2];
		// day_s.innerHTML = ctime_s[1];
		// day_f.innerHTML = ctime_s[0];
		console.log('url(' + src + ctime_s[7] + '.png' + ')');
		sec_s.style.background = 'url(' + src + ctime_s[7] + '.png' + ')';
		sec_f.style.background = 'url(' + src + ctime_s[6] + '.png' + ')';
		min_s.style.background = 'url(' + src + ctime_s[5] + '.png' + ')';
		min_f.style.background = 'url(' + src + ctime_s[4] + '.png' + ')';
		hour_s.style.background = 'url(' + src + ctime_s[3] + '.png' + ')';
		hour_f.style.background = 'url(' + src + ctime_s[2] + '.png' + ')';
		day_s.style.background = 'url(' + src + ctime_s[1] + '.png' + ')';
		day_f.style.background = 'url(' + src + ctime_s[0] + '.png' + ')';

		countDown();
	}, 1000);
})();