tm.define("Menu_MusicButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "menu_musicButton";
		var width = 230;
		var height = 80;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMusic : function() {
		this.getController().moveToMusic();
	},
})