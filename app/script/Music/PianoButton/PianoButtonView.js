tm.define("PianoButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_pianoButton";
		var width = 106;
		var height = 72;
		var x = 910;
		var y = 246;
		this.superInit(image, width, height, x, y, manager);
	},
	showNoteFocus : function() {
		this.getController().showNoteFocus();
	},
	reset : function() {
		this.getController().reset();
	},
})