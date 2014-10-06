tm.define("HumenShowRemoveNoteFocusState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
	},
	updateAction : function() {
		this.getParent().showRemoveNoteFocus();
	},
})