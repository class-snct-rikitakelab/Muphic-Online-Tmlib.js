tm.define("SpriteDisableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getImageName());
		this.getParent().setAlpha(1.0);
		this.getParent().setInteractive(false);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		return;
	},
	pointingOverAction : function() {
		return;
	},
	pointingOutAction : function() {
		return;
	},
})