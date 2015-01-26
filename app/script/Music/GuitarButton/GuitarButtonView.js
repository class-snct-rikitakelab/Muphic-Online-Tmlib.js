tm.define("GuitarButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_clarinetButton";
		var width = 106;
		var height = 72;
		var x = 910;
		var y = 346;
		this.superInit(image, width, height, x, y, manager);
	},
	showNoteFocus : function() {
		this.getController().showNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})