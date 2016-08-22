define(function(require,exports,module){
	exports.wheel=function(ev){
		var oEvent=ev||event;
		var bDown=true;
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		fn&&fn(bDown);
		oEvent.preventDefault&&oEvent.preventDefault();
	}
})