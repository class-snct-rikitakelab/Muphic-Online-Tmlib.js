tm.define("TutorialButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_tutorialButton";
		var width = 400;
		var height = 60;
		var x = SCREEN_WIDTH / 2 - width / 2;
		var y = SCREEN_HEIGHT - 90;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToTutorial : function() {
		this.getController().moveToTutorial();
	},
})