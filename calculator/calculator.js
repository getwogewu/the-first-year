//var num1 = "99", num2 = "22";
// function compare(arr1,arr2){
// 	var min = Math.min(arr1.length , arr2.length);
// 	var max = arr1.length >= arr2.length ? arr1 : arr2 ;
// 	return max,min;
// }

var value_result = document.querySelector("#result");
var value_enter = document.querySelector("#enter");
var oButton = document.querySelector("#button");
var num = oButton.getElementsByTagName('input');
var num1;
var num2;
var button_len = num.length;

for(var i=0 ; i < button_len ; i++ ){
	if( !isNaN( parseInt(num[i].value) ) ){

		num[i].addEventListener("click",function(){

			// if( !isNaN( parseInt(this.value) ) ){
			 	if(value_enter.value === "0"){
					value_enter.value = this.value;
				}else{
					value_enter.value += this.value;
				}
			
			console.log(this.value);
			
		},false);

	}else if( num[i].value === "C" ){

		num[i].addEventListener("click",function(){
			value_enter.value = "0";
				value_result.value = "0";
				// num1 = "";
				// num2 = "";
			},false)
				
	}else{
		num[i].addEventListener("click",function(){
			if(value_result.value === "0" ){
				value_result.value = value_enter.value + this.value;
				//value_result.value += "+";
				value_enter.value = "0";
				//num1 = value_result.value;
			}else{
					if(this.value === "+"){
						// num2 = value_enter.value;
						// sum(num1,num2);
						value_result.value += "+";
						sum(parseInt(value_result.value) ,value_enter.value);
					}else if(this.value === "-"){
						value_result.value = value_result.value + this.value;
					}else if(this.value === "x"){
						value_result.value = value_result.value + this.value;
					}else if(this.value === "/"){
						value_result.value = value_result.value + this.value;
					}else{
						//=
						sum(parseInt(value_result.value) ,value_enter.value);
						value_result.value = value_result.value.replace( "+", "");
					
					}
			}
		},false)	
	}
}



// function enterNum(){
// 	console.log(num[i].value);
// }


function sum(num1,num2){
	var arr1 = num1.toString().split("").reverse();
	var arr2 = num2.split("").reverse();
	var min = Math.min(arr1.length, arr2.length);
	var max = arr1.length >= arr2.length ? arr1 : arr2 ;
	var len = max.length;
	console.log("arr1:"+arr1+" "+"arr2:"+ arr2);
	console.log(max,min);
	var arrSum = [];
		
	for(var i=0 ; i<len ; i++){
		if( i<min ){
			arrSum[i] = (parseInt(arr1[i]) + parseInt(arr2[i])).toString() ;
			
		}else{
			arrSum[i] = (max[i]).toString();
		}
		if(arrSum[i].length > 1 && i != len-1){
			arr1[i+1] = parseInt(arr1[i+1])+1;
			arrSum[i] = (parseInt(arrSum[i])-10).toString();
			// if(i = len-1){
			// 	arrSum.push("1");
				// }
			}
		//result += arrSum[i];
		console.log("arrSum"+i+":"+arrSum[i]);
	}
	var result=arrSum.reverse().join("");
	// for(var j = arrSum.length-1 ; j>-1 ;j-- ){
	// 	result += arrSum[j];
	// 	}
	value_result.value = result + "+";
	//num1 = result;
	value_enter.value = "0" ;
	console.log("result:"+result);
}

