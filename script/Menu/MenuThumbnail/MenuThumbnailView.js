tm.define("MenuThumbnailView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "menu_thumbnail"
		var width = 230;
		var height = 150;
		var x = 375;
		var y = 330;
		this.superInit(image, width, height, x, y, manager);
	},
})