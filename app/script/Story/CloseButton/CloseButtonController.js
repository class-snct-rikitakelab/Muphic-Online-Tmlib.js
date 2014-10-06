tm.define("CloseButtonController", {
	superClass : "IllustButtonController",
	init : function(manager) {
		this.superInit(manager);
	},
	removePalette : function() {
		this.getManager().removePalette();
	},
})