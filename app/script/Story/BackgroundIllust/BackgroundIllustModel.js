tm.define("BackgroundIllustModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.setBackgroundIllust(null);
	},
	changeBackground : function(backgroundIllust) {
		this.setBackgroundIllust(backgroundIllust);
		this.notify();
	},

	getBackgroundIllust : function() { return this.backgroundIllust; },
	setBackgroundIllust : function(backgroundIllust) { this.backgroundIllust = backgroundIllust; },
})