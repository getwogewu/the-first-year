function photo(){
	alert('这个功能还没有实现┑(￣Д ￣)┍')
}
/*分页*/
var obj,j;
var page=0;
var nowPage=0;//当前页
var listNum=10;//每页显示<ul>数
var PagesLen;//总页数
var PageNum=4;//分页链接接数(5个)
onload=function(){
obj=document.getElementById("dairy_add").getElementsByTagName("tr");
j=obj.length
PagesLen=Math.ceil(j/listNum);//Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
upPage(0)
}
function upPage(p){
nowPage=p
//内容变换
for (var i=0;i<j;i++){
obj[i].style.display="none"
}
for (var i=p*listNum;i<(p+1)*listNum;i++){
if(obj[i])obj[i].style.display="block"
}
//分页链接变换
strS='<a href="###" onclick="upPage(0)" style="color:#fff;">首页</a>  '
var PageNum_2=PageNum%2==0?Math.ceil(PageNum/2)+1:Math.ceil(PageNum/2)
var PageNum_3=PageNum%2==0?Math.ceil(PageNum/2):Math.ceil(PageNum/2)+1
var strC="",startPage,endPage;
if (PageNum>=PagesLen) {startPage=0;endPage=PagesLen-1}
else if (nowPage<PageNum_2){startPage=0;endPage=PagesLen-1>PageNum?PageNum:PagesLen-1}//首页
else {startPage=nowPage+PageNum_3>=PagesLen?PagesLen-PageNum-1: nowPage-PageNum_2+1;var t=startPage+PageNum;endPage=t>PagesLen?PagesLen-1:t}
for (var i=startPage;i<=endPage;i++){
 if (i==nowPage)strC+='<a href="###" style="color:#dc996e;	font-weight: bold;" onclick="upPage('+i+')">'+(i+1)+'</a> '
 else strC+='<a href="###" onclick="upPage('+i+')" style="color:#fff;">'+(i+1)+'</a> '
}
strE=' <a href="###" onclick="upPage('+(PagesLen-1)+')" style="color:#fff;">尾页</a>  '
strE2=nowPage+1+"/"+PagesLen+"页"+"  共"+j+"条"
document.getElementById("changpage").innerHTML=strS+strC+strE+strE2
}