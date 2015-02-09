tm.define("ReplaceNoteButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	showRemoveNoteFocus : function() {
		this.getModel().setIsAvailable(true);
		this.getManager().showRemoveNoteFocus();
	},
	reset : function() {
		this.getModel().setIsAvailable(false);
		this.getManager().reset();
	},
})