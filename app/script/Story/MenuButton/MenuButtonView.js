tm.define("StoryMenuButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "story_menuButton";
		var width = 106;
		var height = 72;
		var x = 30;
		var y = 30;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMenu : function() {
		this.getController().moveToMenu();
	},
})