// SuperClass
tm.define("IllustButtonManager", {
	superClass : "MVCManagerButton",
	init : function() {
		this.superInit();
	},
	setEnableState : function() {
		this.getView().setState(IllustButtonEnableState(this.getView()));
	},

	getPalette : function() { return this.palette; },
	setPalette : function(palette) { this.palette = palette; },
	getPalettePreviewScreen : function() { return this.getPalette().getPreviewScreen(); },
	setPalettePreviewScreen : function(previewScreen) { this.getPalette().setPreviewScreen(previewScreen); },
	getPaletteRemoveIllustButton : function() { return this.getPalette().getRemoveIllustButton(); },
	setPaletteRemoveIllustButton : function(removeIllustButton) { this.getPalette().setRemoveIllustButton(removeIllustButton); },
	getPaletteOtherObject : function() { return this.getPalette().getOtherObject(); },
	setPaletteOtherObject : function(otherObject) { this.getPalette().setOtherObject(otherObject); },
})