define(function(require,exports,module){
	exports.getByClass=function(obj,sName){
		if(obj.getElementsByClassName){
			return obj.getElementsByClassName(sName);
		}else{
			var res=[];
			var allE=obj.getElementsByTagName('*');
			for(var i=0;i<allE.length;i++){
				var arr=allE.className.split(' ');
				for(var j=0;j<arr.length;j++){
					if(arr[j]==sName){
						res.push(allE[i]);
					}
				}
			}
			return res;
		}
	}
})