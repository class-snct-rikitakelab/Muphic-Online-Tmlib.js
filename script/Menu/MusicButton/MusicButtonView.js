tm.define("Menu_MusicButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "menu_musicButton";
		var width = SCREEN_WIDTH/5;
		var height = SCREEN_HEIGHT * 0.1;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMusic : function(x) {
		this.getController().moveToMusic(x);
	},
})