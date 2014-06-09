tm.define("MenuIntroDialog", {
	ownedScene : undefined,

	superClass : "ExtendedSprite",
	init : function(scene) {
		var image = "menu_introDialog";
		var width = 640;
		var height = 342;
		var x = (SCREEN_WIDTH - 640) / 2;
		var y = (SCREEN_HEIGHT - 342) / 2;
		this.superInit(image, width, height, x, y);
		this.addToScene(scene);
		this.ownedScene = scene;			
	},

	removeDialog : function() {
		this.removeFromScene();
		this.getBackground().setEnableState();
		this.ownedScene.activateStorySelectButtons();
		this.ownedScene.activateMusicSelectButtons();
	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
})