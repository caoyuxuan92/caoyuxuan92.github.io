define(function(require,exports,module){
	var G=require('getByClass');
	exports.tab=function(id){
		var movie_moreMsg=G.getByClass(document,id);
		for(var i=0;i<movie_moreMsg.length;i++){
			(function (index){
				var timer=null;
				var aLi=movie_moreMsg[index].children[0].children[movie_moreMsg[i].children[0].children.length-1].children;
				var aUl=movie_moreMsg[index].children[1].children;
				var iNow=0;
				/*alert(movie_moreMsg[i].children[0].children.length-1)*/
				for(var j=0;j<aLi.length;j++){
					(function(index1){
						aLi[j].onclick=function(){
							iNow=index1;
							for(var k=0;k<aLi.length;k++){

								aLi[k].className='';
								aUl[k].style.display='none';
							}
							aLi[iNow].className='active';
							aUl[iNow].style.display='block';
						}
					})(j)
				}
				function Timer(){
					timer=setInterval(function(){
						if(movie_moreMsg[index].children[0].children[0].innerHTML=='+') return;
						iNow++;
						if(iNow==aLi.length) iNow=0;
						tab();
					},2000)
				}
				Timer();
				movie_moreMsg[index].onmouseover=function(){
					clearInterval(timer);
				};
				movie_moreMsg[index].onmouseout=function(){
					clearInterval(timer);
					Timer();
				}
				function tab(){
					for(var k=0;k<aLi.length;k++){

						aLi[k].className='';
						aUl[k].style.display='none';
					}
					aLi[iNow].className='active';
					aUl[iNow].style.display='block';
				}
			})(i)
		}
	}
})
/*define(function(require,exports,module){
	var G=require('getByClass');
	exports.tab=function(id){
		var a = G.getByClass(document,id);

		function b(f, e) {
			if (!f) {
				return
			}
			var m = f.children[0].children[f.children[0].children.length - 1].children;
			var c = f.children[0].children[0];
			var l = f.children[1].children;
			var k = 0;
			var j = null;
			for (var g = 0; g < m.length; g++) {
				m[g].index = g;
				m[g].onclick = function() {
					k = this.index;
					d(k)
				};
				m[g].onmousedown = function() {
					return false
				}
			}
			function d(n) {
				if (c.innerHTML == "+") {
					return
				}
				for (var o = 0; o < l.length; o++) {
					m[o].className = "";
					l[o].style.display = "none"
				}
				m[n].className = e;
				l[n].style.display = "block"
			}
			function h() {
				j = setInterval(function() {
					k++;
					if (k == m.length) {
						k = 0
					}
					d(k)
				}, 2000)
			}
			h();
			f.onmouseover = function() {
				clearInterval(j)
			};
			f.onmouseout = h
		}
		b(a[0], "active");
		b(a[1], "active");
		b(a[2], "active");
		b(a[3], "active");
		b(a[4], "active2")
	}
})*/