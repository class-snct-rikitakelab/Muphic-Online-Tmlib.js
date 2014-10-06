tm.define("Palette", {
	init : function(scene) {
		this.closeButton = CloseButtonManager(scene, this);
		this.thumbnailButton = null;
		this.thumbnail = null;
		this.previewScreen = null;
		this.otherObject = null;
		this.initThumbnailButton(scene);
		this.initThumbnail(scene);
	},
	initThumbnailButton : function(scene) {
		// override
	},
	initThumbnail : function(scene) {
		// override
	},
	changeThumbnail : function(icon) {
		// override
	},
	//ウィンドウ描画全般の関数？
	addPalette : function() {
		this.getPaletteFrame().addToScene();
		this.getCloseButton().addToScene();
		for(var index in this.thumbnailButton) {
			this.thumbnailButton[index].addToScene();
		}
		for(var index in this.thumbnail) {
			this.thumbnail[index].addToScene();
		}
		this.darkenOtherObject();
		this.disablePreviewScreen();
	},
	//ウィンドウ削除全般の関数？
	removePalette : function() {
		this.getPaletteFrame().removeFromScene();
		this.getCloseButton().removeFromScene();
		for(var index in this.thumbnailButton) {
			this.thumbnailButton[index].removeFromScene();
		}
		for(var index in this.thumbnail) {
			this.thumbnail[index].removeFromScene();
		}
		this.enablePreviewScreen();
	},
	countIllust : function() {
		return this.getPreviewScreen().countIllust();
	},
	darkenOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].setDarkState();
		}
	},
	enableOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].setEnableState();
		}
	},
	disableOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].setDisableState();
		}
	},
	enablePreviewScreen : function() {
		this.getPreviewScreen().setEnableState();
	},
	disablePreviewScreen : function() {
		this.getPreviewScreen().setDisableState();
	},
	//
	enableRemoveIllustButton : function() {
		this.getRemoveIllustButton().setEnableState();
	},
	disableRemoveIllustButton : function() {
		this.getPreviewScreen().setDisableState();
	},

	getPaletteFrame : function() { return this.paletteFrame; },
	setPaletteFrame : function(paletteFrame) { this.paletteFrame = paletteFrame; },
	getCloseButton : function() { return this.closeButton; },
	setCloseButton : function(closeButton) { this.closeButton = closeButton; },
	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
	getRemoveIllustButton : function() { return this.removeIllustButton; },
	setRemoveIllustButton : function(removeIllustButton) { this.removeIllustButton = removeIllustButton; },
	getOtherObject : function() { return this.otherObject; },
	setOtherObject : function(otherObject) { this.otherObject = otherObject; },
})