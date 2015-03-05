tm.define("ReplaceNoteButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_replaceNoteButton";
		var width = 106;
		var height = 72;
		var x = 910;
		var y = 480;
		this.superInit(image, width, height, x, y, manager);
	},
	showRemoveNoteFocus : function() {
		this.getController().showReplaceNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})