tm.define("ButtonDarkState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getDarkImage());
		this.getParent().setAlpha(1.0);
		this.getParent().setInteractive(false);
	},
	touchEndBehavior : function() {
		return;
	},
	enterFrameBehavior : function() {
		return;
	}
})