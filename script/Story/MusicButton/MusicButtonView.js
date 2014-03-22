tm.define("MusicButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_musicButton";
		var width = 100;
		var height = 100;
		var x = 30;
		var y = 30;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMusic : function() {
		this.getController().moveToMusic();
	},
})