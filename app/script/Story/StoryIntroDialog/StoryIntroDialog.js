tm.define("StoryIntroDialog", {
	superClass : "ExtendedSprite",
	init : function(scene) {
		var image = "story_introDialog";
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
		this.getMenuButton().setEnableState();
		this.getPreviewScreen().getPreviewScreen().setEnableState();
		this.getBackgroundButton().setEnableState();
		this.getHumanButton().setEnableState();
		this.getAnimalButton().setEnableState();
		this.getItemButton().setEnableState();
		this.getRemoveIllustButton().setDisableState();
		var backgroundIllust = {
			"arg1": "background",
			"arg2": "empty",
			"arg3": null
		};
		this.getPreviewScreen().changeBackground(backgroundIllust);
	},
	deactivateObject : function(){
		this.getBackground().setDarkState();
		this.getMenuButton().setDarkState();
		this.getPreviewScreen().getPreviewScreen().setDarkState();
		this.getBackgroundButton().setDarkState();
		this.getHumanButton().setDarkState();
		this.getAnimalButton().setDarkState();
		this.getItemButton().setDarkState();
		this.getRemoveIllustButton().setDarkState();
		var backgroundDarkIllust = {
			"arg1": "background",
			"arg2": "empty",
			"arg3": "dark"
		};
		this.getPreviewScreen().changeBackground(backgroundDarkIllust);
	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
	getMenuButton : function() { return this.menuButton; },
	setMenuButton : function(menuButton) { this.menuButton = menuButton; },
	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
	getBackgroundButton : function() { return this.backgroundButton; },
	setBackgroundButton : function(backgroundButton) { this.backgroundButton = backgroundButton; },
	getHumanButton : function() { return this.humanButton; },
	setHumanButton : function(humanButton) { this.humanButton = humanButton; },
	getAnimalButton : function() { return this.animalButton; },
	setAnimalButton : function(animalButton) { this.animalButton = animalButton; },
	getItemButton : function() { return this.itemButton; },
	setItemButton : function(itemButton) { this.itemButton = itemButton; },
	getRemoveIllustButton : function() { return this.removeIllustButton; },
	setRemoveIllustButton : function(removeIllustButton) { this.removeIllustButton = removeIllustButton; },
})