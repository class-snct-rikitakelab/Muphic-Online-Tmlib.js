tm.define("RemoveAllNoteButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().showRemoveNoteFocus();
	},
})