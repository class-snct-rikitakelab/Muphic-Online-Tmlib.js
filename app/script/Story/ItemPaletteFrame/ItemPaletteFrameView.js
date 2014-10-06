tm.define("ItemPaletteFrameView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "story_itemPalette";
		var width = 1000;
		var height = 600;
		var x = 12;
		var y = 84;
		this.superInit(image, width, height, x, y, manager);
	}
})