tm.define("HumenShowNoteFocusState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
	},
	updateAction : function() {
		this.getParent().showNoteFocus();
	},
})