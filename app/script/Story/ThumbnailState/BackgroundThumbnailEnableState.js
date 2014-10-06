tm.define("BackgroundThumbnailEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().setAlpha(0.5);
		this.getParent().setInteractive(true);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().changeBackground();
	},
	pointingOverAction : function() {
		this.getParent().setAlpha(1.0);
	},
	pointingOutAction : function() {
		this.getParent().setAlpha(0.5);
	},
})