tm.define("IllustEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().destroyIllust();
	},
	pointingOverAction : function() {
		return;
	},
	pointingOutAction : function() {
		return;
	},
})