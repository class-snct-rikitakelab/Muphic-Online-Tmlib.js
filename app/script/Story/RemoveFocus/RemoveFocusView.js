tm.define("RemoveFocusView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "story_removeFocus";
		var width = 46;
		var height = 36;
		var x = SCREEN_WIDTH;
		var y = SCREEN_HEIGHT;
		this.superInit(image, width, height, x, y, manager);
	},
	resetPosition : function() {
		var x = SCREEN_WIDTH + Math.floor(this.width / 2);
		var y = SCREEN_HEIGHT + Math.floor(this.height / 2);
		this.setScale(1, 1);
		this.setPosition(x, y);
	},
	update : function() {
		this.getController().showFocus();
	},
})