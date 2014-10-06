tm.define("HumanPalette", {
	superClass : "Palette",
	init : function(scene) {
		this.superInit(scene);
		this.paletteFrame = CharacterPaletteFrameManager(scene);
	},
	initThumbnailButton : function(scene) {
		this.thumbnailButton = new Array(4);
		this.thumbnailButton["man"] = ThumbnailButtonManager(scene, this, "man");
		this.thumbnailButton["lady"] = ThumbnailButtonManager(scene, this, "lady");
		this.thumbnailButton["boy"] = ThumbnailButtonManager(scene, this, "boy");
		this.thumbnailButton["girl"] = ThumbnailButtonManager(scene, this, "girl");
		this.thumbnailButton["man"].setPushState();
	},
	initThumbnail : function(scene) {
		this.thumbnail = new Array(16);
		this.thumbnail[0] = CharacterThumbnailManager(scene, this, "man", "glad", "front");
		this.thumbnail[1] = CharacterThumbnailManager(scene, this, "man", "glad", "back");
		this.thumbnail[2] = CharacterThumbnailManager(scene, this, "man", "glad", "right");
		this.thumbnail[3] = CharacterThumbnailManager(scene, this, "man", "glad", "left");
		this.thumbnail[4] = CharacterThumbnailManager(scene, this, "man", "angry", "front");
		this.thumbnail[5] = CharacterThumbnailManager(scene, this, "man", "angry", "back");
		this.thumbnail[6] = CharacterThumbnailManager(scene, this, "man", "angry", "right");
		this.thumbnail[7] = CharacterThumbnailManager(scene, this, "man", "angry", "left");
		this.thumbnail[8] = CharacterThumbnailManager(scene, this, "man", "sad", "front");
		this.thumbnail[9] = CharacterThumbnailManager(scene, this, "man", "sad", "back");
		this.thumbnail[10] = CharacterThumbnailManager(scene, this, "man", "sad", "right");
		this.thumbnail[11] = CharacterThumbnailManager(scene, this, "man", "sad", "left");
		this.thumbnail[12] = CharacterThumbnailManager(scene, this, "man", "enjoy", "front");
		this.thumbnail[13] = CharacterThumbnailManager(scene, this, "man", "enjoy", "back");
		this.thumbnail[14] = CharacterThumbnailManager(scene, this, "man", "enjoy", "right");
		this.thumbnail[15] = CharacterThumbnailManager(scene, this, "man", "enjoy", "left");
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