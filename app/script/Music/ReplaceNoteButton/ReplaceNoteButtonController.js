tm.define("ReplaceNoteButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	showReplaceNoteFocus : function() {
		this.getModel().setIsAvailable(true);
		this.getManager().showReplaceNoteFocus();
	},
	reset : function() {
		this.getModel().setIsAvailable(false);
		this.getManager().reset();
	},
})