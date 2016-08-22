
function getByClass(obj,sName){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sName);
	}else{
		var res=[];
		var allE=obj.getElementsByTagName('*');
		for(var i=0;i<allE.length;i++){
			var arr=allE.className.split(' ');
			for(var j=0;j<arr.length;j++){
				if(arr[j]==sName){
					res.push(allE[i]);
				}
			}
		}
		return res;
	}
}


window.onload=function(){
	var movie_moreMsg=getByClass(document,'movie_moreMsg');
	var fi_tab=getByClass(document,'fi_tab')[0];
	var fi_tab_li=fi_tab.children[0].children;
	var fi_pointer=getByClass(document,'fi_pointer')[0];
	var fi_content=getByClass(document,'fi_content')[0];
	var fi_content_li=fi_content.children;
	var iNow=0;
	var rollBar1=getByClass(document,'rollBar')[0];
	var rollBox1=getByClass(document,'rollBox')[0];
	var rollBarUp=getByClass(document,'rollBarUp')[0];
	var rollBarDown=getByClass(document,'rollBarDown')[0];
	var movieBox_msg=getByClass(document,'movieBox_msg')[0];
	var movieBox=getByClass(document,'movieBox')[0];

	var rollBar2=getByClass(document,'rollBar')[1];
	var rollBox2=getByClass(document,'rollBox')[1];
	var rollBarUp2=getByClass(document,'rollBarUp')[1];
	var rollBarDown2=getByClass(document,'rollBarDown')[1];
	var scroll_content=document.getElementById('scroll_content');
	var content=document.getElementById('playerContent');

	var playerMaskVideo_js=getByClass(document,'playerMaskVideo_js');
	for(var i=0;i<playerMaskVideo_js.length;i++){
		(function(index){
			var aLi=playerMaskVideo_js[index].children;
			for(var j=0;j<aLi.length;j++){
				(function(index2){
					aLi[index2].onmouseover=function(){
						this.children[0].children[1].style.display='block';
					}
					aLi[index2].onmouseout=function(){
						this.children[0].children[1].style.display='none';
					}
				})(j)
			}
		})(i)
	}
	//移入移出显示隐藏
	//滚动条事件1
	rollBar2.onmousedown=function(ev){
		var oEvent=ev||event;
		var disY=oEvent.clientY-rollBar2.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var newT=oEvent.clientY-disY;
			scroll2(newT);
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			rollBar2.realeaseCapture&&rollBar2.realeaseCapture();
		}
		rollBar2.setCapture&&rollBar2.setCapture();
		return false;
	}
	function scroll2(newT){
		if(newT<rollBarUp2.offsetHeight)	newT=rollBarUp2.offsetHeight;
		if(newT>rollBox2.offsetHeight-rollBar2.offsetHeight-rollBarDown2.offsetHeight) newT=rollBox2.offsetHeight-rollBar2.offsetHeight-rollBarDown2.offsetHeight;
		var scale=(newT-rollBarUp2.offsetHeight)/(rollBox2.offsetHeight-rollBar2.offsetHeight-rollBarDown2.offsetHeight-rollBarUp2.offsetHeight);
		/*scroll_content.style.top=-scale*(scroll_content.offsetHeight-content.offsetHeight)+'px';*/
		startmove(scroll_content,{top:-scale*(scroll_content.offsetHeight-content.offsetHeight)})
		rollBar2.style.top=newT+'px';
	}
	addWheel(content,function(bDown){
		var t=rollBar2.offsetTop;
		if(bDown){
			t+=10;
		}else{
			t-=10;
		}
		scroll2(t);
	})
	//滚动条事件
	rollBar1.onmousedown=function(ev){
		var oEvent=ev||event;
		var disY=oEvent.clientY-rollBar1.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			var newT=oEvent.clientY-disY;
			scroll(newT);
		}
		document.onmouseup=function(){
			document.onmousemove=document.onmouseup=null;
			rollBar1.realeaseCapture&&rollBar1.realeaseCapture();
		}
		rollBar1.setCapture&&rollBar1.setCapture();
		return false;
	}
	function scroll(newT){
		if(newT<rollBarUp.offsetHeight)	newT=rollBarUp.offsetHeight;
		if(newT>rollBox1.offsetHeight-rollBar1.offsetHeight-rollBarDown.offsetHeight) newT=rollBox1.offsetHeight-rollBar1.offsetHeight-rollBarDown.offsetHeight;
		var scale=(newT-rollBarUp.offsetHeight)/(rollBox1.offsetHeight-rollBar1.offsetHeight-rollBarDown.offsetHeight-rollBarUp.offsetHeight);
		/*movieBox_msg.style.top=-scale*(movieBox_msg.offsetHeight-movieBox.offsetHeight)+'px';*/
		startmove(movieBox_msg,{top:-scale*(movieBox_msg.offsetHeight-movieBox.offsetHeight)});
		rollBar1.style.top=newT+'px';
	}
	addWheel(movieBox,function(bDown){
		var t=rollBar1.offsetTop;
		if(bDown){
			t+=10;
		}else{
			t-=10;
		}
		scroll(t);
	}) 
		//焦点图轮播
	for(var i=0;i<fi_tab_li.length;i++){
		(function(index){
			fi_tab_li[i].onmouseover=function(){
				startmove(fi_pointer,{left:76*index},{duration:200});
				startmove(fi_content_li[iNow],{opacity:0});
				fi_content_li[iNow].style.display='none';
				iNow=index;
				fi_content_li[iNow].style.display='block';
				startmove(fi_content_li[index],{opacity:1});
			}
		})(i)
	}
}