tm.define("ButtonDisableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getOffImage());
		this.getParent().setAlpha(0.5);
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