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
	selectIllust : function() {
		this.getController().selectIllust();
	},
})