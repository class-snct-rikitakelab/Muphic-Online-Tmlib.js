tm.define("Menu_MusicButtonView", {
	superClass : "MVCViewButton",
	init : function(manager,x,y) {
		var image = "menu_musicButton";
		var width = 80;
		var height = 80;
//		var x = 400;
//		var y = 500;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMusic : function() {
		this.getController().moveToMusic();
	},
})