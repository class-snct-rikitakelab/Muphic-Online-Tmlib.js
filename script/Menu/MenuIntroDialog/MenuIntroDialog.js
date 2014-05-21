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
		this.getMusicButton().setEnableState();
		this.getStoryButton().setEnableState();

	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
	getMusicButton : function() { return this.musicButton; },
	setMusicButton : function(musicButton) { this.musicButton = musicButton; },
	getStoryButton : function() { return this.storyButton; },
	setStoryButton : function(storyButton) { this.storyButton = storyButton; },
	getBackgroundButton : function() { return this.backgroundButton; },
	setBackgroundButton : function(backgroundButton) { this.backgroundButton = backgroundButton; },
})