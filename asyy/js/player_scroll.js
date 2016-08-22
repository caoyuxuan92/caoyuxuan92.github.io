define(function(require,exports,module){
	var G=require('getByClass');
	var S=require('fn_scroll');
	var A=require('addWheel')
	exports.scroll=function(rollBar){
		var rollBar=G.getByClass(document,'rollBar');
		var rollBarUp=G.getByClass(document,'rollBarUp');
		var rollBarDown=G.getByClass(document,'rollBarDown');
		for(var i=0;i<rollBarDown.length;i++){
			(function(index){
				
			})(i)
		}
		for(var i=0;i<rollBar.length;i++){
			(function(index){
				var rollBox=rollBar[index].parentNode;
				var contBox=rollBar[index].parentNode.parentNode;
				var contMsg=rollBar[index].parentNode.nextElementSibling||this.parentNode.nextSibling;
				rollBarDown[index].onclick=function(){
					var t=rollBar[index].offsetTop;

					t+=10;

					S.scroll(t,rollBar[index],rollBarUp[index],rollBarDown[index],rollBox,contBox,contMsg);
				}
				rollBarUp[index].onclick=function(){
					var t=rollBar[index].offsetTop;

					t-=10;

					S.scroll(t,rollBar[index],rollBarUp[index],rollBarDown[index],rollBox,contBox,contMsg);
				}
				rollBar[index].onmousedown=function(ev){
					var iNow=index;
					rollBox=this.parentNode;
					contBox=this.parentNode.parentNode;
					contMsg=this.parentNode.nextElementSibling||this.parentNode.nextSibling;
					var oEvent=ev||event;
					var disY=oEvent.clientY-rollBar[index].offsetTop;
					document.onmousemove=function(ev){
						var oEvent=ev||event;
						var newT=oEvent.clientY-disY;
						S.scroll(newT,rollBar[index],rollBarUp[index],rollBarDown[index],rollBox,contBox,contMsg);
					}
					document.onmouseup=function(){
						document.onmousemove=document.onmouseup=null;
						rollBar[index].realeaseCapture&&rollBar[index].realeaseCapture();
					}
					rollBar[index].setCapture&&rollBar[index].setCapture();
					return false;
				};
				A.addWheel(rollBar[index].parentNode.parentNode,function(bDown){

					var t=rollBar[index].offsetTop;
					if(bDown){
						t+=10;
					}else{
						t-=10;
					}
					S.scroll(t,rollBar[index],rollBarUp[index],rollBarDown[index],rollBox,contBox,contMsg);
				})
			})(i)
		}
	}
})
		