tm.define("ThumbnailEnableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().setAlpha(0.5);
		this.getParent().setInteractive(true);
	},
})