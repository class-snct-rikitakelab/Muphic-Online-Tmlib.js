tm.define("BackgroundButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_backgroundButton";
		var width = 106;
		var height = 72;
		var x = 35;
		var y = 200;
		this.superInit(image, width, height, x, y, manager);
	},
	addPalette : function() {
		this.getController().addPalette();
	},
})