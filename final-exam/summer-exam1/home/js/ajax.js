(function(doc){

		var ajax = function(json) {
			var xhr = null,
				data = json['data'] ? json['data'] : null;
			if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
			if (window.ActiveXObject) xhr = new ActiveXObject("Microsoft.XMLHttp");
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200) {
					var response = xhr.responseText;
					json['success'](response);
				}
			}
			xhr.open(json['method'], json['url']);
			// xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
			xhr.send();
		};
		var store = document.querySelectorAll('.store');
		var store_title = document.querySelectorAll('.store-title');
		var store_pic = document.querySelectorAll('.store-pic');
		var title = document.querySelectorAll('.title');
		var money = document.querySelectorAll('.money');
		var good = document.querySelectorAll('.good');
		var distance = document.querySelectorAll('.distance');
		var discount = document.querySelectorAll('.num');
		var len = store.length;
		var i;
		console.log(len);



		(function(){
		ajax({
				url: "http://kaohe.zeroling.com/kaohe/list",
				method: 'POST',
				success: function(response) {
					var obj = JSON.parse(response);
					var data = obj.data;
					console.log(data);
					for( i=0; i<len; i++){

						//店铺图片
						store_pic[i].src = data[i].imgUrl;

						//商店名称
						title[i].innerHTML = data[i].title;

						//flag
						if(data[i].flag.search("qiang") !== -1){
							store_title[i].innerHTML += '<img src="img/qiang.png" alt="">';
						}
						 if(data[i].flag.search("xue") !== -1){
							store_title[i].innerHTML += '<img src="img/xue.png" alt="">';
						}
						 if(data[i].flag.search("pingpai") !== -1){
							store_title[i].innerHTML += '<img src="img/pingpai.png" alt="">';
						}

						//人均消费
						money[i].innerHTML = data[i].average;

						//点赞
						if(data[i].good === 0){
							good[i].querySelector('img').style.display="none";
							good[i].innerHTML = data[i].people +"人已享";
						}else{
							console.log (data[i].good);
							good[i].innerHTML ='<img src="img/good.png" alt="">'+ data[i].good +'位朋友</span>';
						}
						
						//距离
						distance[i].innerHTML = data[i].distance; 

						//折扣
						discount[i].innerHTML = data[i].discount;

						//抢
						console.log(data[i].flag.search("qiang"));

					}
				}
			});
	})();
	})(document);