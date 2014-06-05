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
		this.getStoryButton(0).setEnableState();
		this.getStoryButton(1).setEnableState();
		this.getStoryButton(2).setEnableState();
		this.getStoryButton(3).setEnableState();

		this.getMusicButton(0).setEnableState();
		this.getMusicButton(1).setEnableState();
		this.getMusicButton(2).setEnableState();
		this.getMusicButton(3).setEnableState();
	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
	getMusicButton : function(x) { return musicButtonArray[x]; },
	setMusicButton : function(musicButton,x) { musicButtonArray[x] = musicButton; },
	getStoryButton : function(x) { return storyButtonArray[x]; },
	setStoryButton : function(storyButton,x) { storyButtonArray[x] = storyButton; },
})