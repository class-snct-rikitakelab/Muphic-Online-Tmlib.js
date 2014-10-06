tm.define("NoteFocusEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().createNote();
	},
})