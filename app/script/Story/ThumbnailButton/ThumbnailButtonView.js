tm.define("ThumbnailButtonView", {
	superClass : "MVCViewButton",
	init : function(manager, icon) {
		var image = THUMBNAILBUTTON[icon].image;
		var width = THUMBNAILBUTTON[icon].width;
		var height = THUMBNAILBUTTON[icon].height;
		var x = THUMBNAILBUTTON[icon].x;
		var y = THUMBNAILBUTTON[icon].y;
		this.superInit(image, width, height, x, y, manager);
	},
	changeThumbnail : function() {
		this.getController().changeThumbnail();
	},
})