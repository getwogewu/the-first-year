function pageChange() {

	var lists = document.getElementsByClassName('photo-list');
	var t_lists = document.getElementsByClassName('teacher-list');
	var photo_pages = document.getElementsByClassName('photo-page');
	var t_pages = document.getElementsByClassName('teacher-page');
	var photo_page1 = document.getElementById('photo-page1');
	var photo_page2 = document.getElementById('photo-page2');
	var photo_page3 = document.getElementById('photo-page3');
	var photo_page4 = document.getElementById('photo-page4');
	var photo_page5 = document.getElementById('photo-page5');
	var t_page1 = document.getElementById('teacher-page1');
	var t_page2 = document.getElementById('teacher-page2');
	var left = document.getElementById('left');
	var num_1 = document.getElementById('num1');
	var num_2 = document.getElementById('num2');
	var num_3 = document.getElementById('num3');
	var num_4 = document.getElementById('num4');
	var num_5 = document.getElementById('num5');
	var right = document.getElementById('right');
	var t_left = document.getElementById('t-left');
	var t_1 = document.getElementById('t-1');
	var t_2 = document.getElementById('t-2');
	var t_right = document.getElementById('t-right');
	var btn_star = document.getElementById('btn-star');
	var btn_photo = document.getElementById('btn-photo');
	var btn_video = document.getElementById('btn-video');
	var btn_teacher = document.getElementById('btn-teacher');
	var star = document.getElementById('star-content');
	var photo = document.getElementById('photo-content');
	var video = document.getElementById('video-content');
	var teacher = document.getElementById('teacher-content');
	var num_star = document.getElementById('star-num');
	var num_photo = document.getElementById('photo-num');
	var num_video = document.getElementById('video-num');
	var num_teacher = document.getElementById('teacher-num');

	btn_star.addEventListener('click', function() {
		btn_star.className = "nav-list nav-lis-active";
		btn_photo.className = "nav-list";
		btn_video.className = "nav-list";
		btn_teacher.className = "nav-list";
		star.style.display = "block";
		photo.style.display = "none";
		video.style.display = "none";
		teacher.style.display = "none";
		num_star.style.display = "block";
		num_photo.style.display = "none";
		num_video.style.display = "none";
		num_teacher.style.display = "none";
	});
	btn_photo.addEventListener('click', function() {
		btn_photo.className = "nav-list nav-lis-active";
		btn_star.className = "nav-list";
		btn_video.className = "nav-list";
		btn_teacher.className = "nav-list";
		photo.style.display = "block";
		star.style.display = "none";
		video.style.display = "none";
		teacher.style.display = "none";
		num_star.style.display = "none";
		num_photo.style.display = "block";
		num_video.style.display = "none";
		num_teacher.style.display = "none";
	});
	btn_video.addEventListener('click', function() {
		btn_video.className = "nav-list nav-lis-active";
		btn_photo.className = "nav-list";
		btn_star.className = "nav-list";
		btn_teacher.className = "nav-list";
		video.style.display = "block";
		photo.style.display = "none";
		star.style.display = "none";
		teacher.style.display = "none";
		num_star.style.display = "none";
		num_photo.style.display = "none";
		num_video.style.display = "block";
		num_teacher.style.display = "none";
	});
	btn_teacher.addEventListener('click', function() {
		btn_teacher.className = "nav-list nav-lis-active";
		btn_photo.className = "nav-list";
		btn_video.className = "nav-list";
		btn_star.className = "nav-list";
		teacher.style.display = "block";
		photo.style.display = "none";
		video.style.display = "none";
		star.style.display = "none";
		num_star.style.display = "none";
		num_photo.style.display = "none";
		num_video.style.display = "none";
		num_teacher.style.display = "block";
	});


	for (var i = 0; i < 5; i++) {
		(function(i) {
			right.addEventListener("click", function() {
				if (num_4.className == "photo-list buttom-list-active") {
					photo_page4.style.display = "none";
					photo_page5.style.display = "block";
					num_4.className = "photo-list";
					num_5.className = "photo-list buttom-list-active";
				} else if (num_3.className == "photo-list buttom-list-active") {
					photo_page3.style.display = "none";
					photo_page4.style.display = "block";
					num_3.className = "photo-list";
					num_4.className = "photo-list buttom-list-active";
				} else if (num_2.className == "photo-list buttom-list-active") {
					photo_page2.style.display = "none";
					photo_page3.style.display = "block";
					num_2.className = "photo-list";
					num_3.className = "photo-list buttom-list-active";
				} else if (num_1.className == "photo-list buttom-list-active") {
					photo_page1.style.display = "none";
					photo_page2.style.display = "block";
					num_1.className = "photo-list";
					num_2.className = "photo-list buttom-list-active";
				}
			});
			left.addEventListener("click", function() {
				if (num_5.className == "photo-list buttom-list-active") {
					photo_page5.style.display = "none";
					photo_page4.style.display = "block";
					num_5.className = "photo-list";
					num_4.className = "photo-list buttom-list-active";
				} else if (num_4.className == "photo-list buttom-list-active") {
					photo_page4.style.display = "none";
					photo_page3.style.display = "block";
					num_4.className = "photo-list";
					num_3.className = "photo-list buttom-list-active";
				} else if (num_3.className == "photo-list buttom-list-active") {
					photo_page3.style.display = "none";
					photo_page2.style.display = "block";
					num_3.className = "photo-list";
					num_2.className = "photo-list buttom-list-active";
				} else if (num_2.className == "photo-list buttom-list-active") {
					photo_page2.style.display = "none";
					photo_page1.style.display = "block";
					num_2.className = "photo-list";
					num_1.className = "photo-list buttom-list-active";
				}
			});
			lists[i + 1].addEventListener("click", function() {
				var page_now = photo_pages[i];
				var list_now = lists[i + 1];
				photo_page1.style.display = "none";
				photo_page2.style.display = "none";
				photo_page3.style.display = "none";
				photo_page4.style.display = "none";
				photo_page5.style.display = "none";
				page_now.style.display = "block";
				num_1.className = "photo-list";
				num_2.className = "photo-list";
				num_3.className = "photo-list";
				num_4.className = "photo-list";
				num_5.className = "photo-list";
				list_now.className = "photo-list buttom-list-active"
			});
		})(i);
	}

	for (var j = 0; j < 2; j++) {
		(function(j) {
			t_right.addEventListener("click", function() {
				if (t_1.className == "teacher-list buttom-list-active") {
					t_page1.style.display = "none";
					t_page2.style.display = "block";
					t_1.className = "teacher-list";
					t_2.className = "teacher-list buttom-list-active";
				}
			});
			t_left.addEventListener("click", function() {
				if (t_2.className == "teacher-list buttom-list-active") {
					t_page2.style.display = "none";
					t_page1.style.display = "block";
					t_2.className = "teacher-list";
					t_1.className = "teacher-list buttom-list-active";
				}
			});
			t_lists[j + 1].addEventListener("click", function() {
				var page_now = t_pages[j];
				var list_now = t_lists[j + 1];
				t_page1.style.display = "none";
				t_page2.style.display = "none";
				page_now.style.display = "block";
				t_1.className = "teacher-list";
				t_2.className = "teacher-list";
				list_now.className = "teacher-list buttom-list-active"
			});
		})(j);
	}



}
pageChange();