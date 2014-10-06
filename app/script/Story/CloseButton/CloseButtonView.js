tm.define("CloseButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_closeButton";
		var width = 83;
		var height = 44;
		var x = 892;
		var y = 619;
		this.superInit(image, width, height, x, y, manager);
	},
	removePalette : function() {
		this.getController().removePalette();
	},
})