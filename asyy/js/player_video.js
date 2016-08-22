define(function(require,exports,module){
	var G=require('getByClass');

	exports.video=function(id){
		var playerMaskVideo_js=G.getByClass(document,id);
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
	}
})
		