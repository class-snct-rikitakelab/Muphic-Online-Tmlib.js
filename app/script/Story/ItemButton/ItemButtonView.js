tm.define("ItemButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_itemButton";
		var width = 106;
		var height = 72;
		var x = 35;
		var y = 587;
		this.superInit(image, width, height, x, y, manager);
	},
	addPalette : function() {
		this.getController().addPalette();
	},
})