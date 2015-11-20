// var g =function(id){
// 	return document.getElementById('id');
// }

// g(new_student).onclick=function(){
// 	g(login_bg).style.display = "none";
// }
var new_stu =document.getElementById("new_student");
var login = document.getElementById("login_bg");
var log_btn =document.getElementById("login_btn");
var mes =document.getElementById("mes_bg");
var close_log =document.getElementById("close_login");
// new_stu.addElementListener("click",function{
// login.display.style ="block";
// },false);
new_stu.onclick=function(){
	login.style.display="block";
}
log_btn.onclick=function(){
	var oInput=login.getElementsByTagName("input");
	if(oInput[0].value==""){
		alert("请填写学号或者录取通知书号");
	}else{
		var num1 = oInput[0].value.search(/\d{10}/);
		var num2 = oInput[0].value.search(/\d{8}/);
		if(num1==-1||num2==-1){
			alert("请输入正确的学号或者录取通知书号");
		}else if(oInput[1].value==""){
			alert("请输入密码");
		}else if(oInput[1].value.search(/\w{6}/)==-1){
			alert("密码错误");
		}else{
			//发送表单;
            mes.style.display = "block";
            login.style.display ="none";
		}
	}
}
close_login.onclick=function(){
	login.style.display="none";	
}

var oSure =document.getElementById("sure");
var oPass = document.getElementById("pass");
var close =document.getElementById("close_mes");
oPass.onclick=function(){
	mes.style.display = "none";
}
close_mes.onclick=function(){
	mes.style.display ="none";
}
oSure.onclick=function(){
	var oInput = mes.getElementsByTagName("input");
	if(oInput[0].value==""){
		alert("请完善信息");
	}else if(oInput[0].value.search(/\d{11}/)==-1){
		alert("请输入正确的手机号");
	}else if(oInput[1].value==""){
		alert("请完善信息");
	}else if(oInput[1].value.search(/\d{5,10}/)==-1){
		alert("请输入正确的手机号");
	}else{
		//发送数据
		mes.style.display="none";
	}
}