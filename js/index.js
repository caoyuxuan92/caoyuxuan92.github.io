	function getPos(obj){
		var t=0;
		var l=0;
		while(obj){
			t+=obj.offsetTop;
			l+=obj.offsetLeft;
			obj=obj.offsetParent;
		}
		return {'top':t,'left':l}
	};
	function getByClass(obj,sClass){
		var aRes=[];
		var aEl=obj.getElementsByTagName('*');
		var re=new RegExp('\\b'+sClass+'\\b');
		for(var i=0;i<aEl.length;i++){
			if(aEl[i].className.search(re)!=-1){
				aRes.push(aEl[i]);
			}
		}
		return aRes;
	};
	function getDir(obj,ev){
		var scrollT=document.documentElement.scrollTop||document.body.scrollTop;
		var scrollL=document.documentElement.scrollLeft||document.body.scrollLeft;
		var x=obj.offsetWidth/2+getPos(obj).left-scrollL-ev.clientX;
		
		var y=obj.offsetHeight/2+getPos(obj).top-scrollT-ev.clientY;

		/*alert(x);*/
		
		return Math.round((Math.atan2(y,x)*180/Math.PI+180)/90)%4;
	};
	function through(obj){
		var oS=obj.children[1];
		obj.onmouseenter=function(ev){
			var oEvent=ev||event;
			var dir=getDir(obj,oEvent);
			oS.style.top='0';
			oS.style.opacity=0;
			oS.style.filter='alpha(opacity:0)';
			switch(dir){
				case 0:
					oS.style.left=obj.offsetWidth+'px';
					break;
				case 1:
					oS.style.left='0';
					oS.style.top=obj.offsetHeight+2+'px';
					break;
				case 2:
					oS.style.top='0';
					oS.style.left=-obj.offsetWidth+'px';
					break;
				case 3:
					oS.style.left='0';
					oS.style.top=-obj.offsetHeight-2+'px';
					break;
			};
			startmove(oS,{left:0,top:0,opacity:0.9});
		};
		obj.onmouseleave=function(ev){
			var oEvent=ev||event;
			var dir=getDir(obj,oEvent);
			switch(dir){
				case 0:
					startmove(oS,{left:obj.offsetWidth+2,top:0,opacity:0});
					break;
				case 1:
					startmove(oS,{left:0,top:obj.offsetHeight+2,opacity:0});
					break;
				case 2:
					startmove(oS,{left:-obj.offsetWidth-1,top:0,opacity:0});
					break;
				case 3:
					startmove(oS,{left:0,top:-obj.offsetHeight-2,opacity:0});
					break;
			};
		};
	};
	function setStyle3(obj, name, value){
        var newName=name.charAt(0).toUpperCase()+name.substring(1);
        obj.style['Webkit'+newName]=value;
        obj.style['Moz'+newName]=value;
        obj.style['ms'+newName]=value;
        obj.style['O'+newName]=value;
        obj.style[name]=value;
    };
	//daohang
	window.onload=function(){

		var oFocus=getByClass(document.body,'focus')[0];
		var oFocus_img=oFocus.getElementsByTagName('img')[1];
		var oFocus_img1=oFocus.getElementsByTagName('img')[1];
		var oBar=getByClass(document.body,'bar')[0];
		var navBtn=getByClass(document.body,'nav_btn')[0];
		var navUl=getByClass(document.body,'nav_list')[0];
		var navLi=navUl.getElementsByTagName('li');
		var navBg=getByClass(document.body,'nav_bg')[0];
		var navBg1=getByClass(document.body,'nav_bg1')[0];
		var srctimer=null;
		var timer=null;
		var timer1=null;
		var timer3=null;
		var n=0;
		var tab=getByClass(document.body,'tab')[0];
		var adageBox=getByClass(document.body,'adageDiv')[0];
		var workBox=getByClass(document.body,'works_box')[0];
		var workUl=getByClass(document.body,'works_ul');
		var workLi=tab.getElementsByTagName('li');
		var tabBtn=getByClass(document.body,'tab_btn')[0].children;
		var toLeft=getByClass(document.body,'toleft')[0];
		var toLeftBtn=toLeft.getElementsByTagName('span')[0];
		var toRight=getByClass(document.body,'toright')[0];
		var toRightBtn=toRight.getElementsByTagName('span')[0];
		var aWorks=getByClass(document.body,'works');
		var iNow=0;
		var clientH=document.documentElement.clientHeight;
		var clientW=document.documentElement.clientWidth;
		var scrT=document.documentElement.scrollTop||document.body.scrollTop;
		var resume=getByClass(document.body,'resume')[0];
		var resumetab=getByClass(document.body,'resume_tab')[0];
		var resLi=resumetab.getElementsByTagName('li');
		var resDiv=getByClass(document.body,'intro');
		var x;
		var y;
		var oLeft;
		var oTop;
		resize();
		window.onresize=function(){
			resize();
		};
		function resize(){
			clientH=document.documentElement.clientHeight;
			clientW=document.documentElement.clientWidth;
			
			scrT=document.documentElement.scrollTop||document.body.scrollTop;
			for(var i=0;i<aWorks.length;i++){
				aWorks[i].style.height=clientH+'px';
			};
			for(var i=0;i<workUl.length;i++){
				workUl[i].style.width=clientW*0.8+'px';
			};
			oFocus.style.height=clientH+'px';
			document.body.style.paddingTop=oFocus.offsetHeight+'px';
			oFocus_img.style.left=document.documentElement.clientWidth/2+'px';
			oFocus_img1.style.left='50%';
			oLeft=oFocus_img.offsetLeft;
			oTop=oFocus_img.offsetTop;
			x=oFocus.offsetWidth/2;
			y=oFocus.offsetHeight/2;
		};
		workUl[iNow].style.display='block';
		workUl[iNow].children[0].style.left='0';
		workUl[iNow].children[1].style.right='0';
		document.documentElement.scrollTop=1;
		document.body.scrollTop=1;
		
		//导航按钮
		if(!(document.documentElement.clientWidth<640)){
			navBtn.onmouseover=function(){
				navUl.style.display='block';
				clearInterval(timer3);
				var n=0;
				clearInterval(timer);
				clearInterval(timer1);
				navBg.style.display='block';
				startmove(navBg,{opacity:0.8},{duration:300});
				navBg1.style.display='block';
				startmove(navBg1,{opacity:0.6},{duration:200});
				timer=setInterval(function(){
					startmove(navLi[n],{left:0,opacity:1},{duration:500});
					n++;
					if(n==navLi.length){
						clearInterval(timer);
					}
				},50)
			};
			navBtn.onmouseout=function(){
				timer3=setTimeout(show,100);
				navUl.style.display='block';
			};
		}else{

			navBtn.onclick=function(){
				if(navUl.style.display=='none'){
					navUl.style.display='block';
					clearInterval(timer3);
					var n=0;
					clearInterval(timer);
					clearInterval(timer1);
					navBg.style.display='block';
					startmove(navBg,{opacity:0.8},{duration:300});
					navBg1.style.display='block';
					startmove(navBg1,{opacity:0.6},{duration:200});
					timer=setInterval(function(){
						startmove(navLi[n],{left:0,opacity:1},{duration:500});
						n++;
						if(n==navLi.length){
							clearInterval(timer);
						}
					},50)
				}else{
					timer3=setTimeout(show,100);
					navUl.style.display='block';
				};
					
			};
			
		};
		
		navUl.onmouseover=function(){
			clearTimeout(timer3)
		};
		navUl.onmouseout=function(){
			timer3=setTimeout(show,100);
		};
		function show(){
			var n=navLi.length-1;
			clearInterval(timer1);
			clearInterval(timer);
			startmove(navBg,{opacity:0},{duration:1000});
			startmove(navBg1,{opacity:0},{duration:300});
			timer1=setInterval(function(){
				(function(index){
					startmove(navLi[index],{left:-200,opacity:0},{duration:500,complete:function(){
						if(index==0){
							navUl.style.display='none';
							navBg.style.display='none';
							navBg1.style.display='none';
						}
					}});
					if(index==0){
						clearInterval(timer1);
					}
				})(n)
					n--;
			},100)
		};
		//li样式
		for(var i=0;i<navLi.length;i++){
			(function(index){
				navLi[i].onmouseover=function(){
					this.children[1].children[0].style.color='#e70000';
					startmove(this.children[0],{opacity:1});
					startmove(this.children[1],{left:28},{duration:400});
				};
				navLi[i].onmouseout=function(){
					this.children[1].children[0].style.color='#fff';
					startmove(this.children[0],{opacity:0});
					startmove(this.children[1],{left:18},{duration:400});
				};
				if(i==0){
					navLi[i].onclick=function(){
						scrMove(navUl,1,800);
					};
				}else{
					navLi[i].onclick=function(){
						scrMove(navUl,index*clientH,800);
					};
				};
			})(i)	
		};
		/*navLi[0].onclick=function(){
			scrMove(navUl,1,800);
		}
		navLi[1].onclick=function(){
			scrMove(navUl,clientH,800);
		}
		navLi[2].onclick=function(){
			scrMove(navUl,560+clientH,800);
		}
		navLi[3].onclick=function(){
			scrMove(navUl,560+2*clientH,900);
		}
		navLi[4].onclick=function(){
			scrMove(navUl,560+3*clientH,900);
		}*/
		//焦点移入
		oFocus.onmouseover=function(){
			startmove(oBar,{opacity:1});
		};
		oFocus.onmouseout=function(){
			startmove(oBar,{opacity:0});
		};
		
		var timer5=null;
		oFocus.onmouseenter=function(){

			document.onmousemove=function(ev){
				clearTimeout(timer5);
				var oEvent=ev||event;
				var clientX=oEvent.clientX;
				var clientY=oEvent.clientY;
				var disX=clientX-x;
				var disY=clientY-y;
				oFocus_img.style.left=oLeft-disX/7+300+'px';
				/*oFocus_img.style.top=oTop-disY/10+125+'px';*/
			};
			oFocus.onmouseleave=function(ev){
				document.onmousemove=null;
				/*timer5=setTimeout(function(){
					startmove(oFocus_img,{left:oLeft+300,top:oTop+125})
				},1000)*/
			};
		};
			
			/*oFocus.onmouseleave=function(ev){
				startmove(oFocus_img,{left:oLeft+300,top:oTop+125})
			}*/
		//穿墙
		for(var i=0;i<workLi.length;i++){
			/*(function(index){
				if(index<5){
					workLi[index].children[0].style.top=workLi[index].offsetHeight+'px';
				}
			})(i);*/
			through(workLi[i]);
		};

		
		var timer6;
		window.onscroll=function(){
			
			scrT=document.documentElement.scrollTop||document.body.scrollTop;
			var n=0;
			/*addWheel(document.body,sc)*/
			addWheel(document.body,sc)
			/*if(scrT+clientH>workLi[0].offsetTop){
				var i=0;
				timer6=setInterval(function(){
					startmove(workLi[i].children[0],{top:0},{duration:300});
					i++;
					if(i==5){
						clearInterval(timer6);
						i=0;
					}
				},500)
			};*/
		};

			/*addWheel(document.body,sc)*/
		addWheel(document.body,sc)
		var timeout=null;
		var bReady=false;
		function sc(bDown){
			
			if(bReady) return;
			bReady=true;
			if(bDown==true){
				if(scrT>=0&&scrT<clientH){
					scroll1();
				}else if(scrT>=clientH&&scrT<2*clientH){
					scroll2();
				}else if(scrT>=2*clientH&&scrT<3*clientH){
					scroll3();
				}else if(scrT>=3*clientH&&scrT<4*clientH){
					scrMove(navUl,4*clientH,900);
					aWorks[3].style.animation='1s rot ease-in forwards';
					clearTimeout(timeout);
					timeout=setTimeout(function(){ 
						aWorks[3].style.animation='none';
						bReady=false;
					},1000); 
				}else if(scrT>=4*clientH){
					bReady=false;
				};
			}else{
				if(scrT>=1&&scrT<=clientH){
					scrMove(navUl,1,800);
					timeout=setTimeout(function(){ 
						bReady=false;
					},800); 
				}else if(scrT>clientH&&scrT<=2*clientH){
					scroll1();
				}else if(scrT>2*clientH&&scrT<=3*clientH){
					scroll2();
				}else if(scrT>3*clientH&&scrT<=4*clientH){
					scroll3();
				};
			};
		};
		//选项卡
		function scroll1(){
			tab.style.opacity=0;
			scrMove(navUl,clientH,800);

/*					aWorks[0].style.transformOrigin='top center';
			aWorks[0].style.transform='rotateX(30deg)';*/
			setStyle3(aWorks[0], 'animation', '1s rot ease-in forwards');
			setStyle3(tab, 'animation', '0.4s rot2 ease-out forwards .8s');
			clearTimeout(timeout);
			timeout=setTimeout(function(){ 
				tab.style.opacity=1;
				setStyle3(aWorks[0], 'animation', 'none');
			setStyle3(tab, 'animation', 'none');
				bReady=false;
			},1200); 
		};
		function scroll2(){
			scrMove(navUl,2*clientH,800);
			resume.style.opacity=0;
			setStyle3(aWorks[1], 'animation', '1s rot ease-in forwards');
			setStyle3(resume, 'animation', '0.4s rot3 ease-in forwards .8s');
			clearTimeout(timeout);
			timeout=setTimeout(function(){ 
				resume.style.opacity=1;
				setStyle3(aWorks[1], 'animation', 'none');
				setStyle3(resume, 'animation', 'none');
				bReady=false;
			},1200); 
		};
		function scroll3(){
			scrMove(navUl,3*clientH,900);
			adageBox.style.opacity=0;
			setStyle3(aWorks[2], 'animation', '1s rot ease-in forwards');
			setStyle3(adageBox, 'animation', '0.4s rot3 ease-in forwards 1s');
			clearTimeout(timeout);
			timeout=setTimeout(function(){ 
				adageBox.style.opacity=1;
				setStyle3(aWorks[2], 'animation', 'none');
				setStyle3(adageBox, 'animation', 'none');
				bReady=false;
			},1200); 
		};
		toRightBtn.onclick=function(){
			var newNow=iNow+1;
			if(newNow==3) newNow=0;
			tabb(newNow);
		};
		toLeftBtn.onclick=function(){
			var newNow=iNow-1;
			if(newNow==-1) newNow=2;
			tabb(newNow);
		};
		for(var i=0;i<tabBtn.length;i++){
			tabBtn[i].index=i;
			tabBtn[i].onmouseover=function(){
				if(iNow!=this.index){
					var ind=this.index;
					tabb(ind);
				};
			};
		};
		function tabb(inde){
			startmove(workUl[iNow].getElementsByTagName('div')[0],{left:'-400',opacity:'0'},{duration:500});
			startmove(workUl[iNow].getElementsByTagName('div')[1],{right:'-400',opacity:'0'},{duration:500,complete:function(){
				workUl[iNow].style.display='none';
				iNow=inde;
				workUl[iNow].style.display='block';
				startmove(workUl[iNow].getElementsByTagName('div')[0],{left:'0',opacity:'1'},{duration:500});
				startmove(workUl[iNow].getElementsByTagName('div')[1],{right:'0',opacity:'1'},{duration:500});
			}});
			for(var j=0;j<tabBtn.length;j++){
				tabBtn[j].className='';
			};
			tabBtn[inde].className='on';
		};
		for(var i=0;i<resLi.length;i++){
			resLi[i].index=i;
			resLi[i].onmouseover=function(){
				for(var i=0;i<resLi.length;i++){
					resLi[i].className='';
					resDiv[i].className='intro';
				}
				resLi[this.index].className='on';
				resDiv[this.index].className='intro on';
			};
		};
	};