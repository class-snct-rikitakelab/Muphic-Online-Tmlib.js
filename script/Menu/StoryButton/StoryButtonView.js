tm.define("Menu_StoryButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_storyButton";
		var width = 80;
		var height = 80;
		var x = 500;
		var y = 500;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToStory : function() {
		this.getController().moveToStory();
	},
})