tm.define("BackgroundThumbnailView", {
	superClass : "MVCViewSprite",
	init : function(manager, weather, background) {
		var image = THUMBNAIL[weather][background].image;
		var width = THUMBNAIL[weather][background].width;
		var height = THUMBNAIL[weather][background].height;
		var x = THUMBNAIL[weather][background].x;
		var y = THUMBNAIL[weather][background].y;
		this.superInit(image, width, height, x, y, manager);
	},
	pointingEndAction : function() {
		this.getController().changeBackground();
	},
	pointingOverAction : function() {
		this.setAlpha(1.0);
	},
	pointingOutAction : function() {
		this.setAlpha(0.5);
	},
	renew : function() {
		var weather = this.getModel().getWeather();
		var background = this.getModel().getBackground();
		var image = THUMBNAIL[weather][background].image;
		this.changeImage(image);
	},
})