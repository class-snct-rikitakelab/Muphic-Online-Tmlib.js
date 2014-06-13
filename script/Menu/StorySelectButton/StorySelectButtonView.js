tm.define("StorySelectButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y,buttonNumber) {
		var image = "menu_storyButton"+buttonNumber;
		var width = SCREEN_WIDTH * 0.2;
		var height = SCREEN_HEIGHT * 0.2;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToStory : function(x) {
		this.getController().moveToStory(x);
	},
})