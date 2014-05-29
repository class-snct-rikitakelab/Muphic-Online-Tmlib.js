tm.define("Menu_StoryButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "menu_storyButton";
		var width = 230;
		var height = 150;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToStory : function() {
		this.getController().moveToStory();
	},
})