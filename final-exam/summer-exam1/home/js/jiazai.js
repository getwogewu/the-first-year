document.addEventListener("touchstart",function (e) {  
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等  
    var touch = e.touches[0]; //获取第一个触点  
    var x = Number(touch.pageX); //页面触点X坐标  
    var y = Number(touch.pageY); //页面触点Y坐标  
    //记录触点初始位置  
    startX = x;  
    startY = y; 
}  ,false)

 
document.addEventListener("touchmove",function (e) {  
    //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等 
    var div = document.getElementById('div'); 
    var touch = e.touches[0]; //获取第一个触点  
    var x = Number(touch.pageX); //页面触点X坐标  
    var y = Number(touch.pageY); //页面触点Y坐标  
    //判断滑动方向  
    if (y - startY > 0) {  
        //向上滑动
       alert('a');
    }  
}  ,false)
