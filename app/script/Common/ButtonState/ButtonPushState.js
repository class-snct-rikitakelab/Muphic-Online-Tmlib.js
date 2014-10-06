tm.define("ButtonPushState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getPushImage());
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
		this.getParent().changeImage(this.getParent().getOnImage());
	},
	pointingOutAction : function() {
		this.getParent().changeImage(this.getParent().getPushImage());
	},
})