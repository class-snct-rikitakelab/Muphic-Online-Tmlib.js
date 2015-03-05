tm.define("HumenShowReplaceNoteFocusState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
	},
	updateAction : function() {
		this.getParent().showReplaceNoteFocus();
	},
})