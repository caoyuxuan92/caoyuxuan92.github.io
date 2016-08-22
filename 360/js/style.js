// JavaScript Document
    	window.onload=function(){
			//导航样式
			var oDiv=document.getElementById('nav1');
			var aLi=oDiv.getElementsByTagName('li');
			for(i=0;i<aLi.length;i++){
				aLi[i].onmouseover=function(){
					for(i=0;i<aLi.length;i++){
						aLi[i].className='';
					}
					this.className='active';
				}	
			}
			//选项卡
			function tab(obj,obj2){
				var aLi2=document.getElementById(obj).getElementsByTagName('li');
				var oDiv3=document.getElementById(obj2).getElementsByTagName('div');
				for(i=0;i<aLi2.length;i++){
					aLi2[i].index=i;
					aLi2[i].onmouseover=function(){
						for(i=0;i<aLi2.length;i++){
							aLi2[i].className='';
							oDiv3[i].style.display='none';
						}
						this.className='active';
						oDiv3[this.index].style.display='block';
					}	
				}
			}
			//焦点右切换
			var aLi1=document.getElementById('topUl').getElementsByTagName('li');
			var aEm=document.getElementById('topUl').getElementsByTagName('em');
			var oDiv2=document.getElementById('bottomUl').getElementsByTagName('div');
			for(i=0;i<aLi1.length;i++){
				aLi1[i].index=i;
				aLi1[i].onmouseover=function(){
					for(i=0;i<aLi1.length;i++){
						aLi1[i].className='';
						aEm[i].style.display='none';
						oDiv2[i].style.display='none';
					}
					this.className='active';
					aEm[this.index].style.display='block';
					oDiv2[this.index].style.display='block';
				}	
			}
			//选项卡
			
			tab('tab1','hot_content')
			tab('tab2','tab_content2')
			tab('tab3','tab_content3')
			tab('tab4','tab_content4')
			tab('tab5','tab_content5')
			tab('tab6','tab_content6')
			tab('tab7','tab_content7')
			tab('tab8','tab_content8')
			tab('tab9','tab_content9')
			tab('tv_box_left','tv_box_list')
			//焦点轮播
			var n=0;
			var bigDiv=document.getElementById('focus_left');
			var aLi2=document.getElementById('focus_left').getElementsByTagName('li');
			var oDiv3=document.getElementById('focus_left').getElementsByTagName('div');
			for(i=0;i<aLi2.length;i++){
				aLi2[i].index=i;
				aLi2[i].onmouseover=function(){
					n=this.index;
					show();
				}	
			}
			function next(){
				n++;
				if(n>4){
					n=0;	
				}	
				show();
			}
			function show(){
				for(i=0;i<aLi2.length;i++){
					aLi2[i].className='';
					oDiv3[i].style.display='none';
				}
				aLi2[n].className='active';
				oDiv3[n].style.display='block';	
			}
			var timer=setInterval(next,2000)
			bigDiv.onmouseover=function(){
				clearInterval(timer);	
			}
			bigDiv.onmouseout=function(){
				clearInterval(timer);
				timer=setInterval(next,2000);	
			}
		}