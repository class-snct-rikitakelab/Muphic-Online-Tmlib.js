tm.define("SaxButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_saxButton";
		var width = 106;
		var height = 72;
		var x = 910;
		var y = 340;
		this.superInit(image, width, height, x, y, manager);
	},
	showNoteFocus : function() {
		this.getController().showNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})