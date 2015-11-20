	var init = function() {
	var center = new qq.maps.LatLng(29.5325251434,106.6073521519);
	var map = new qq.maps.Map(document.getElementById("position"), {
		center: new qq.maps.LatLng(29.5325251434,106.6073521519),
		zoom: 14
	});
	//地图标记
	var marker = new qq.maps.Marker({
        position: center,
        map: map
    });
	
	//设置路网图层
	var pano_layer = new qq.maps.PanoramaLayer();
	pano_layer.setMap(map);
	//创建街景
	var pano = new qq.maps.Panorama(document.getElementById('pano_holder'), {
		pano: '10081147130320163359700',
		pov: {
			heading: 97,
			pitch: 0
		},
		zoom: 1
	});
	pano_service = new qq.maps.PanoramaService();
	qq.maps.event.addListener(map, 'click', function(evt) {
		var point = evt.latLng;
		var radius;
		pano_service.getPano(point, radius, function(result) {
			pano.setPano(result.svid);
		});
	});
	}
	var map_real = document.getElementById('map-real');
	var map_pic = document.getElementById('map-pic');
	var btn_map_real = document.getElementById('btn-map-real');
	var btn_map_pic = document.getElementById('btn-map-pic');

	// btn_map_real.onclick = function(){
	// 	map_real.style.display = 'block';
	// 	map_pic.style.display = 'none';
	// 	console.log(1);
	// };

	// btn_map_pic.addEventListener('click',function(){
	// 	map_pic.style.display = 'block';
	// 	map_real.style.display = 'none';
	// });


