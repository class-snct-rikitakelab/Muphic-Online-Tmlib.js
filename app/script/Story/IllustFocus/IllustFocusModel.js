tm.define("IllustFocusModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.illust = null;
	},
	changeIllust : function(illust) {
		this.setIllust(illust);
		this.notify();
	},

	getIllust : function() { return this.illust; },
	setIllust : function(illust) { this.illust = illust; },
})