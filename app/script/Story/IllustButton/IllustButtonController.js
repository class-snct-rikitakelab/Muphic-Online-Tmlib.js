// SuperClass
tm.define("IllustButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	addPalette : function() {
		this.getManager().getPalette().addPalette();
	},
})