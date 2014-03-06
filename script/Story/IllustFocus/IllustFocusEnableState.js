tm.define("IllustFocusEnableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().setAlpha(0.5);
		this.getParent().setInteractive(true);
		this.getParent().setIsUpdate(false);
	},
})