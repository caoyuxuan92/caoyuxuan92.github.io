define(function(require,exports,module){
	var A=require('addEvent');
	exports.addWheel=function(obj,fn){
		function wheel(ev){
			var oEvent=ev||event;
			var bDown=true;
			bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
			fn&&fn(bDown);
			oEvent.preventDefault&&oEvent.preventDefault();
		}
		if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
			A.addEvent(obj,'DOMMouseScroll',wheel);
		}else{
			A.addEvent(obj,'mousewheel',wheel)
		}
		
	}
})