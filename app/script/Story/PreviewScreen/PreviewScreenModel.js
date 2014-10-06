tm.define("PreviewScreenModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.backgroundData = null;
		this.objectData = new Array();
	},
	changeBackground : function(backgroundData) {
		this.setBackgroundData(backgroundData);
		this.notify();
	},

	getBackgroundData : function() { return this.backgroundData; },
	setBackgroundData : function(backgroundData) { this.backgroundData = backgroundData; },
})