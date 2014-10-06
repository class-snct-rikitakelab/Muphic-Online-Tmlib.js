tm.define("AnimalPalette", {
	superClass : "Palette",
	init : function(scene) {
		this.superInit(scene);
		this.paletteFrame = CharacterPaletteFrameManager(scene);
	},
	initThumbnailButton : function(scene) {
		this.thumbnailButton = new Array(4);
		this.thumbnailButton["dog"] = ThumbnailButtonManager(scene, this, "dog");
		this.thumbnailButton["bird"] = ThumbnailButtonManager(scene, this, "bird");
		this.thumbnailButton["bear"] = ThumbnailButtonManager(scene, this, "bear");
		this.thumbnailButton["turtle"] = ThumbnailButtonManager(scene, this, "turtle");
		this.thumbnailButton["dog"].setPushState();
	},
	initThumbnail : function(scene) {
		this.thumbnail = new Array(16);
		this.thumbnail[0] = CharacterThumbnailManager(scene, this, "dog", "glad", "front");
		this.thumbnail[1] = CharacterThumbnailManager(scene, this, "dog", "glad", "back");
		this.thumbnail[2] = CharacterThumbnailManager(scene, this, "dog", "glad", "right");
		this.thumbnail[3] = CharacterThumbnailManager(scene, this, "dog", "glad", "left");
		this.thumbnail[4] = CharacterThumbnailManager(scene, this, "dog", "angry", "front");
		this.thumbnail[5] = CharacterThumbnailManager(scene, this, "dog", "angry", "back");
		this.thumbnail[6] = CharacterThumbnailManager(scene, this, "dog", "angry", "right");
		this.thumbnail[7] = CharacterThumbnailManager(scene, this, "dog", "angry", "left");
		this.thumbnail[8] = CharacterThumbnailManager(scene, this, "dog", "sad", "front");
		this.thumbnail[9] = CharacterThumbnailManager(scene, this, "dog", "sad", "back");
		this.thumbnail[10] = CharacterThumbnailManager(scene, this, "dog", "sad", "right");
		this.thumbnail[11] = CharacterThumbnailManager(scene, this, "dog", "sad", "left");
		this.thumbnail[12] = CharacterThumbnailManager(scene, this, "dog", "enjoy", "front");
		this.thumbnail[13] = CharacterThumbnailManager(scene, this, "dog", "enjoy", "back");
		this.thumbnail[14] = CharacterThumbnailManager(scene, this, "dog", "enjoy", "right");
		this.thumbnail[15] = CharacterThumbnailManager(scene, this, "dog", "enjoy", "left");
	},
	selectIllust : function(illust) {
		this.removePalette();
		this.disableOtherObject();
		this.getPreviewScreen().changeSelectIllust(illust);
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
			this.thumbnail[index].changeCharacter(icon);
		}
	},
})