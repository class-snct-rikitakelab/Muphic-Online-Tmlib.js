tm.define("SpriteEnableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getImageName());
		this.getParent().setAlpha(1.0);
		this.getParent().setInteractive(true);
	},
	pointingStartAction : function() {
		// override
	},
	pointingEndAction : function() {
		// override
	},
	pointingOverAction : function() {
		// override
	},
	pointingOutAction : function() {
		// override
	},
})