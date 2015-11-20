//map
function map(arr,fn){
	if(typeof fn ==="function"){
		for(var i = 0,len=arr.length; i < len; i++){
			arr[i] = fn(arr[i],i,arr);
		}
			return arr;
	}
}

//forEach
function forEach(arr,fn){
	if(typeof fn ==="function"){
		 for(var i = 0,len=arr.length; i < len; i++){
			fn(arr[i],i,arr);
	    }
	}
}	

//filter
function filter(fn,s){
    var newArr = [];
    if(typeof fn === "function"){
    	for(var i =0,len = this.length;i < len; i++){
	    	if(fn.call(s,this[i],i,this)){
	    	newArr.push(this[i]);
	    	}
	    }
	    return newArr;
    }
}

//some
function some(fn,s){
    var a = false;
    if(typeof fn === "function"){
    	for(var i =0,len = arr.length;i < len; i++){
	        if(a === true){break;}
	        a = fn.call(this[i],i,this)
	    }
	    return a;
    }
}		

//every
function some(fn,s){
    var a = true;
    if(typeof fn === "function"){
    	for(var i =0,len = arr.length;i < len; i++){
	        if(a ===f alse){break;}
	        a = fn.call(this[i],i,this)
	    }
	    return a;
    }
}	

//reduce
function reduce(fn,s){
    if(typeof fn === "function"){
    	var a, sth = 0;
    	for(var i =0,len = arr.length;i < len; i++){
	        a = fn.call(sth,this[i],i,this)
	    }
	    return a;
    }
}	

//reduceRight
function reduce(fn,s){
    if(typeof fn === "function"){
    	var a, sth = 0;
    	for(var i = arr.length-1 ;i >-1; i--){
	        a = fn.call(sth,this[i],i,this)
	    }
	    return a;
    }
}	

//indexOf
function indexOf(pipei,num){
	var index = -1;
    for(var i =0,len = arr.length;i < len; i++){
    	if (i >= num && this[i] === pipei){
    		index = i;
    		break;
    	}
    }
    return index;
}	

//lastIndexOf
function lastIndexOf(pipei,num){
	var index = -1;
    for(var i = arr.length;i > num; i--){
    	if (i >= num && this[i] === pipei){
    		index = i;
    		break;
    	}
    }
    return index;
}