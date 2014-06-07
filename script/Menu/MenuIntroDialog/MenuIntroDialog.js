tm.define("MenuIntroDialog", {
	superClass : "ExtendedSprite",
	init : function(scene) {
		var image = "menu_introDialog";
		var width = 640;
		var height = 342;
		var x = (SCREEN_WIDTH - 640) / 2;
		var y = (SCREEN_HEIGHT - 342) / 2;
		this.superInit(image, width, height, x, y);
		this.addToScene(scene);
	},
	removeDialog : function() {
		this.removeFromScene();
		this.getBackground().setEnableState();
		this.activateStoryButton();
		this.activateMusicButton();
	},

	activateStoryButton: function() {
		storyButtonArray[0].setEnableState();
		storyButtonArray[1].setEnableState();
		storyButtonArray[2].setEnableState();
		storyButtonArray[3].setEnableState();
	},

	activateMusicButton: function() {
		musicButtonArray[0].setEnableState();
		musicButtonArray[1].setEnableState();
		musicButtonArray[2].setEnableState();
		musicButtonArray[3].setEnableState();		
	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
})