tm.define("ReplaceNoteFocusEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		this.getParent().destroyNote();
	},
	pointingEndAction : function() {
		this.getParent().createNote();
	},
})