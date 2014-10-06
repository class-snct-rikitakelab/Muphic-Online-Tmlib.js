tm.define("MusicYesButton", {
	superClass : "ExtendedButton",
	init : function(scene) {
		var image = "music_yesButton";
		var width = 100;
		var height = 63;
		var x = (SCREEN_WIDTH - 100) / 2;
		var y = (SCREEN_HEIGHT - 63) / 2 + 120;
		this.superInit(image, width, height, x, y);
		this.addToScene(scene);
		this.setEnableState();
	},
	removeDialog : function() {
		this.removeFromScene();
		this.getDialog().removeDialog();
	},
	setEnableState : function() {
		this.setState(MusicYesButtonEnableState(this));
	},

	getDialog : function() { return this.dialog; },
	setDialog : function(dialog) { this.dialog = dialog; },
})