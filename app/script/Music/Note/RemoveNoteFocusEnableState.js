tm.define("RemoveNoteFocusEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().destroyNote();
	},
})