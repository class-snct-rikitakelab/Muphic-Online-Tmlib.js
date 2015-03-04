tm.define("MenuButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "music_menuButton";
		var width = 64;
		var height = 58;
		var x = 30;
		var y = 30;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMenu : function() {
		this.getController().moveToMenu();
	},
})