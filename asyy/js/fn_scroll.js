define(function(require,exports,module){
	var M=require('move');
	exports.scroll=function(newT,rollBar,rollBarUp,rollBarDown,rollBox,contBox,contMsg){
		if(newT<rollBarUp.offsetHeight)	newT=rollBarUp.offsetHeight;
		if(newT>rollBox.offsetHeight-rollBar.offsetHeight-rollBarDown.offsetHeight) newT=rollBox.offsetHeight-rollBar.offsetHeight-rollBarDown.offsetHeight;
		var scale=(newT-rollBarUp.offsetHeight)/(rollBox.offsetHeight-rollBar.offsetHeight-rollBarDown.offsetHeight-rollBarUp.offsetHeight);
		/*movieBox_msg.style.top=-scale*(movieBox_msg.offsetHeight-movieBox.offsetHeight)+'px';*/
		M.startmove(contMsg,{top:-scale*(contMsg.offsetHeight-contBox.offsetHeight)});
		rollBar.style.top=newT+'px';
	}
})