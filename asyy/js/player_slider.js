define(function(require,exports,module){
	var G=require('getByClass');
	var S=require('move');

	exports.slider=function(sName){
		if(G.getByClass(document,sName)[0]==undefined) return
		var fi_tab=G.getByClass(document,sName)[0];
		var fi_tab_li=fi_tab.children[0].children;
		var fi_pointer=fi_tab.children[fi_tab.children.length-1];
		var fi_content=fi_tab.previousElementSibling||fi_tab.previousSibling;
		var fi_content_li=fi_content.children[fi_content.children.length-1].children;
		var iNow=0;
		for(var i=0;i<fi_tab_li.length;i++){

			(function(index){
				fi_tab_li[i].onmouseover=function(){
					S.startmove(fi_pointer,{left:76*index},{duration:200});
					S.startmove(fi_content_li[iNow],{opacity:0});
					fi_content_li[iNow].style.display='none';
					iNow=index;
					fi_content_li[iNow].style.display='block';
					S.startmove(fi_content_li[index],{opacity:1});
				}
			})(i)
		}
	}
})
	