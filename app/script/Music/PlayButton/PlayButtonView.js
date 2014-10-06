tm.define("PlayButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_playButton";
		var width = 110;
		var height = 106;
		var x = 160;
		var y = 25;
		this.superInit(image, width, height, x, y, manager);
	},
	play : function() {
		this.getController().play();
	},
})