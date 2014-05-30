var number = 0 ;

tm.define("Menu_StoryButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y,num) {
		var image = "menu_storyButton";
		var width = 230;
		var height = 150;
		number = num;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToStory : function() {
		//var x = 1;
		document.write(number);
		this.getController().moveToStory(number);
	},
})