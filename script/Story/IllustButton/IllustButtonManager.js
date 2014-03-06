// SuperClass
tm.define("IllustButtonManager", {
	superClass : "MVCManagerButton",
	init : function() {
		this.superInit();
		this.palette = null;
	},

	getPalette : function() { return this.palette; },
	setPalette : function(palette) { this.palette = palette; },
	getPalettePreviewScreen : function() { return this.getPalette().getPreviewScreen(); },
	setPalettePreviewScreen : function(previewScreen) { this.getPalette().setPreviewScreen(previewScreen); },
	getPaletteOtherObject : function() { return this.getPalette().getOtherObject(); },
	setPaletteOtherObject : function(otherObject) { this.getPalette().setOtherObject(otherObject); },
})