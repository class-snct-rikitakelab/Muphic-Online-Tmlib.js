tm.define("SaxButtonPushState", {
	superClass : "ButtonPushState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().reset();
	},
})