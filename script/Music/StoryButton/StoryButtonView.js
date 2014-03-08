tm.define("StoryButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_storyButton";
		var width = 100;
		var height = 100;
		var x = 30;
		var y = 30;
		this.superInit(image, width, height, x, y, manager);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		return;
	},
})