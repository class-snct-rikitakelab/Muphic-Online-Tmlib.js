tm.define("ObserverList", {
	init : function() {
		this._observerList = new Array();
	},
	add : function(observer) {
		this._observerList.push(observer);
	},
	empty : function() {
		this._observerList = new Array();
	},
	count : function() {
		return this._observerList.length;
	},
	get : function(index) {
		if(index > -1 && index < this._observerList.length) {
			return this._observerList[index];
		}
	},
	indexOf : function(observer) {
		var index = 0;
		var pointer = -1;
		while(i < this._observerList.length) {
			if(this._observerList[index] === observer) {
				pointer = index;
			}
			index++;
		}
		return pointer;
	},
	removeIndexAt : function(index) {
		if(index === 0) {
			this._observerList.shift();
		} else if(index === this._observerList.length - 1) {
			this._observerList.pop();
		}
	}
})