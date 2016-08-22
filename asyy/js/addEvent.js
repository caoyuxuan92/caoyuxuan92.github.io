define(function(require,exports,module){
	
	exports.addEvent=function(obj,ev,fn){
		if(obj.addEventListener){
			obj.addEventListener(ev,fn,false);
		}else{
			obj.attachEvent('on'+ev,fn);
		}
	}
})