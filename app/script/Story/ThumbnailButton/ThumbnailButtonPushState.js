tm.define("ThumbnailButtonPushState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getPushImage());
		this.getParent().setAlpha(1.0);
		this.getParent().setInteractive(false);
	},
})