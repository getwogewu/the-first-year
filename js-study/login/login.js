//注册按钮
		var oRegisterButton = document.getElementById('register_button');
		var close = document.getElementById('close');
		var oBox = document.getElementById('box_reg');
		oRegisterButton.onclick=function(){
			oBox.style.display = "block";
			var oRegister = document.getElementById('Register');
			var aInput = oRegister.getElementsByTagName('input');
			var aSpan  = oRegister.getElementsByTagName('span');
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].innerHTML="";
				aInput[i].value="";
			}
		}
		close.onclick=function (){
			var mymessage=confirm("确定关闭窗口?")         ;
		    if(mymessage==true)
		    {
		    	oBox.style.display="none";
		    }
		}

	//登录按钮
		var oLoginButton =document.getElementById('login_button');
		var oBoxl = document.getElementById('box_login');
		var closel = document.getElementById('close_login');
		oLoginButton.onclick=function(){
			oBoxl.style.display = "block";
			var oLogin = document.getElementById('login');
			var aInput = oLogin.getElementsByTagName('input');
			var aSpan  = oLogin.getElementsByTagName('span');
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].innerHTML="";
				aInput[i].value="";
			}
		}
		closel.onclick=function (){
			var mymessage=confirm("确定关闭窗口?")         ;
		    if(mymessage==true)
		    {
		    	oBoxl.style.display="none";
		    }
		}
	// 注册表单验证
	function check(i){
		var oRegister = document.getElementById('Register');
		var aInput = oRegister.getElementsByTagName('input');
		var aSpan  = oRegister.getElementsByTagName('span');
		if(aInput[i].value==""){
			aSpan[i].innerHTML = "不能为空";
			//aInput[i].marginBottom = "0px";
		}else{
            aSpan[i].innerHTML = " ";
			switch(i){
			case 0: if(aInput[0].value.search(/\d{10}/)==-1){
				aSpan[0].innerHTML="学号错误";
				}
				break;
			case 1:if(aInput[1].value.search(/\w+@\w+\.\w+/)==-1){
				aSpan[1].innerHTML="邮箱错误";
				}
				break;
			case 3:if(aInput[2].value!=aInput[3].value){
				aSpan[3].innerHTML="密码不一致";
				}
				break;
			}
		
		}
	}
	//window.onload=function () {
		var aButton = document.getElementById('button_reg');
		aButton.onclick=function(){
			var oRegister = document.getElementById('Register');
			var aInput = oRegister.getElementsByTagName('input');
			var aSpan  = oRegister.getElementsByTagName('span');
			for(var i=0;i<aSpan.length;i++){
				if(aSpan[i].value="")
				aInput[i].innerHTML="不能为空";
			// check(0);
			// check(1);
			// check(2);
			// check(3);
			}
		}
	//}

	//登录表单验证
	function check_log(i){
		var oLogin = document.getElementById('login');
		var aInput = oLogin.getElementsByTagName('input');
		var aSpan  = oLogin.getElementsByTagName('span');
		if(aInput[i].value==""){
			aSpan[i].innerHTML = "不能为空";
			//aInput[i].marginBottom = "0px";
		}else{
            aSpan[i].innerHTML = " ";
			if(i==0&&aInput[0].value.search(/\d{10}/)==-1){
			  	  aSpan[0].innerHTML="学号错误";
				}
		}
	}
	window.onload=function () {
		var aButton = document.getElementById('button_log');
		aButton.onclick=function(){
			check_log(0);
			check_log(1);
		}
	}