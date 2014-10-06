tm.define("IllustModel", {
	superClass : "MVCModel",
	init : function(manager, scene, illust) {
		this.superInit(manager, scene);
		this.setIllust(illust);
	},

	getIllust : function() { return this.illust; },
	setIllust : function(illust) { this.illust = illust; },
})