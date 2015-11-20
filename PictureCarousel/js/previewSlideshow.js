//数据定义（应用时后台获取）
var data=[
    {img:1,h1:'Creative',h2:'DUET'},
    {img:2,h1:'Friendly',h2:'DEVIL'},
    {img:3,h1:'Tranquilent',h2:'COMPATRIOT'},
    {img:4,h1:'Insecure',h2:'HUSSLER'},
    {img:5,h1:'Loving',h2:'REBEL'},
    {img:6,h1:'Passionate',h2:'SEEKER'},
    {img:7,h1:'Crazy',h2:'FRIEND'}
];
//通用函数
var g = function(id){
	if (id.substr(0,1)=='.') {
		return document.getElementsByClassName(id.substr(1));
	}
	return document.getElementById(id);
}
//幻灯片操作
function addSliders(){
	//获取模板
	var tpl_main=g('template_main').innerHTML
					.replace(/^\s*/,'')
					.replace(/\s*$/,'');
	var tpl_ctrl=g('template_ctrl').innerHTML
					.replace(/^\s*/,'')
					.replace(/\s*$/,'');
	//最终输出 HTML 的变量
	var out_main =[];
	var out_ctrl =[];

	//遍历数据，输出
	for( i in data){
		var _html_main =tpl_main
				.replace(/{{index}}/g,data[i].img)
				.replace(/{{h2}}/g,data[i].h1)
				.replace(/{{h3}}/g,data[i].h2)
				.replace(/{{class}}/g,['','main_i_right'][i%2]);

		var _html_ctrl =tpl_ctrl
				.replace(/{{index}}/g,data[i].img);

		out_main.push(_html_main);
		out_ctrl.push(_html_ctrl);			
	}				

	//html回写到对应的DOM
	g('template_main').innerHTML = out_main.join('');
	g('template_ctrl').innerHTML = out_ctrl.join('');

	//增加#main_background
	g('template_main').innerHTML += tpl_main
		.replace(/{{index}}/g,'{{index}}')
		.replace(/{{h2}}/g,data[i].h1)
		.replace(/{{h3}}/g,data[i].h2);
	g('main_{{index}}').id = 'main_background'	
		
}


//幻灯片切换
function swithSlider(n){
	//获得要展现的幻灯片&控制按钮 DOM
	var main = g('main_'+n);
	var ctrl = g('ctrl_'+n);
    
    //获得所有的幻灯片以及控制按钮
    var clear_main = g('.main_i');
    var clear_ctrl = g('.ctrl_i');
    //清除active样式
    for(i=0;i<clear_ctrl.length;i++){
    	clear_main[i].className = clear_main[i].className
    		.replace(' main_i_active','');
    	clear_ctrl[i].className = clear_ctrl[i].className
    		.replace(' ctrl_i_active','');
    }

	main.className +=' main_i_active';
	ctrl.className +=' ctrl_i_active';

	//切换时复制上一张幻灯片到background
	setTimeout(function(){
		g('main_background').innerHTML = main.innerHTML;
	},1)
	
}
//动态调整图片的margin-top 垂直居中
function movePictures(){
	var pictures =g('.picture');
	for(i=0;i<pictures.length;i++){
		pictures[i].style.marginTop = (-1*pictures[i].clientHeight/2) +'px';
	}
}
//定义处理幻灯片输出的时间
window.onload =function(){
	addSliders();
    swithSlider(1);
    setTimeout(function(){
    	movePictures();
    },100)
}
