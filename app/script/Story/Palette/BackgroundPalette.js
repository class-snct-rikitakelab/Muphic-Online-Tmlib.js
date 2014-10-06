tm.define("BackgroundPalette", {
	superClass : "Palette",
	init : function(scene) {
		this.superInit(scene);
		this.paletteFrame = BackgroundPaletteFrameManager(scene);
	},
	initThumbnailButton : function(scene) {
		this.thumbnailButton = new Array(3);
		this.thumbnailButton["sunny"] = ThumbnailButtonManager(scene, this, "sunny");
		this.thumbnailButton["cloud"] = ThumbnailButtonManager(scene, this, "cloud");
		this.thumbnailButton["night"] = ThumbnailButtonManager(scene, this, "night");
		this.thumbnailButton["sunny"].setPushState();
	},
	initThumbnail : function(scene) {
		this.thumbnail = new Array(8);
		this.thumbnail[0] = BackgroundThumbnailManager(scene, this, "sunny", "forest1");
		this.thumbnail[1] = BackgroundThumbnailManager(scene, this, "sunny", "forest2");
		this.thumbnail[2] = BackgroundThumbnailManager(scene, this, "sunny", "river1");
		this.thumbnail[3] = BackgroundThumbnailManager(scene, this, "sunny", "river2");
		this.thumbnail[4] = BackgroundThumbnailManager(scene, this, "sunny", "town1");
		this.thumbnail[5] = BackgroundThumbnailManager(scene, this, "sunny", "town2");
		this.thumbnail[6] = BackgroundThumbnailManager(scene, this, "sunny", "house1");
		this.thumbnail[7] = BackgroundThumbnailManager(scene, this, "sunny", "house2");
	},
	changeBackground : function(backgroundIllust) {
		this.removePalette();
		this.enableOtherObject();
		this.getPreviewScreen().changeBackground(backgroundIllust);
	},
	changeThumbnail : function(icon) {
		for(var index in this.thumbnailButton) {
			if(this.thumbnailButton[index].getIcon() === icon) {
				this.thumbnailButton[index].setPushState();
			} else {
				this.thumbnailButton[index].setEnableState();
			}
		}
		for(var index in this.thumbnail) {
			this.thumbnail[index].changeWeather(icon);
		}
	},
})