tm.define("TutorialButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_dummyButton";
		var width = 200;
		var height = 60;
		var x = SCREEN_WIDTH / 2 - 100;
		var y = SCREEN_HEIGHT - 90;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToOption : function() {
		this.getController().moveToOption();
	},
})