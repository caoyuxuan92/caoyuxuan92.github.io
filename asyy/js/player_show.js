/*define(function(require,exports,module){
	var G=require('getByClass');
	var M=require('move');
	exports.show=function(id){
		var heightArr=[];
		var movie_moreMsg=G.getByClass(document,id);
		for(var i=0;i<movie_moreMsg.length;i++){
			heightArr.push(movie_moreMsg[i].offsetHeight);
			(function(index){
				var move_moreMsgBtn=movie_moreMsg[index].children[0].children[0];
					move_moreMsgBtn.onclick=function(){
						if(this.parentNode.parentNode.offsetHeight>24){
							move_moreMsgBtn.innerHTML='+';
							M.startmove(move_moreMsgBtn.parentNode.parentNode,{height:22})
						}else{
							move_moreMsgBtn.innerHTML='-';
							M.startmove(move_moreMsgBtn.parentNode.parentNode,{height:heightArr[index]})
						}
					}
			})(i)
		}
	}
})*/
define(function(require,exports,module){
	var G=require('getByClass');
	var M=require('move');
	exports.show=function(id){
		var d = G.getByClass(document,id);
		for (var c = 0; c < d.length; c++) {
			d[c].bSign = true;
			d[c].onclick = function() {
				var g = this.parentNode.parentNode;
				var f = this.parentNode;
				var e = this.parentNode.parentNode.children[1];
				var h = f.offsetHeight + e.offsetHeight;
				var i = f.offsetHeight;
				if (this.bSign && parseInt(h) > parseInt(i)) {
					M.startmove(g, {
						"height": i
					});
					this.innerHTML = "+"
				} else {
					M.startmove(g, {
						"height": h
					});
					this.innerHTML = "-"
				}
				this.bSign = !this.bSign
			};
			d[c].onmousedown = function() {
				return false
			}
		}
	}
})