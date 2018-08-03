//封装一个获取页面元素的函数
//参数：字符串
//返回值：
//     如果字符串的第一个字符是#，那么就把参数当作id使用，即使用getElementById获取一个元素
//     如果字符串的第一个字符是.，那么就把参数当作class使用，即使用getElementsByClassName获取若干个元素
//     如果字符串的第一个字符既不是#，也不是. ，那么就把参数当作标签名使用，即使用getElementsByTagName获取若干个元素
function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}