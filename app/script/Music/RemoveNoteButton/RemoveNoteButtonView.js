tm.define("RemoveNoteButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_removeNoteButton";
		var width = 106;
		var height = 72;
		var x = 910;
		var y = 346;
		this.superInit(image, width, height, x, y, manager);
	},
	showRemoveNoteFocus : function() {
		this.getController().showRemoveNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})