tm.define("RemoveAllNoteButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_removeAllNoteButton";
		var width = 106;
		var height =106;
		var x = 40;
		var y = 25;
		this.superInit(image, width, height, x, y, manager);
	},
	showRemoveNoteFocus : function() {
		this.getController().showRemoveNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})