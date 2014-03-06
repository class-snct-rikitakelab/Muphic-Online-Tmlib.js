tm.define("ItemThumbnailView", {
	superClass : "MVCViewSprite",
	init : function(manager, category, item) {
		var image = THUMBNAIL[category][item].image;
		var width = THUMBNAIL[category][item].width;
		var height = THUMBNAIL[category][item].height;
		var x = THUMBNAIL[category][item].x;
		var y = THUMBNAIL[category][item].y;
		this.superInit(image, width, height, x, y, manager);
	},
	pointingEndAction : function() {
		this.getController().selectIllust();
	},
	pointingOverAction : function() {
		this.setAlpha(1.0);
	},
	pointingOutAction : function() {
		this.setAlpha(0.5);
	},
})