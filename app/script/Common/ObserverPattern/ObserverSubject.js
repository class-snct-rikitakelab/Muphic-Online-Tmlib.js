tm.define("ObserverSubject", {
	init : function() {
		this.observers = new ObserverList();
	},
	addObserver : function(observer) {
		this.observers.add(observer);
	},
	removeObserver : function(observer) {
		this.observers.removeIndexAt(this.observers.indexOf(observer));
	},
	notify : function(context) {
		var observerCount = this.observers.count();
		for(var i = 0; i < observerCount; i++) {
			this.observers.get(i).renew(context);
		}
	}
})