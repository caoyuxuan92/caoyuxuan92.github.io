'use strict'

function scrMove(obj,iTarget,time){
	//第一获取就是0
	var start=document.documentElement.scrollTop||document.body.scrollTop||0; 						//起始位置
	var dis=iTarget-start; 				//总距离
	var count=Math.floor(time/30); 	
										//总步数
	var n1=0; 
	clearInterval(obj.timer)							//第几步
	obj.timer=setInterval(function (){
		n1++;
		
		//dis/count每步走多少 //终点+0=终点
		var a=n1/count;
		if(document.documentElement.scrollTop){
			document.documentElement.scrollTop=start+dis*Math.pow(a,3);
		}else{
			document.body.scrollTop=start+dis*Math.pow(a,3);
		}
		
		
		//最后一步清除定时器（停止运动）
		if(n1==count){
			clearInterval(obj.timer);
		}
	},30);
}
