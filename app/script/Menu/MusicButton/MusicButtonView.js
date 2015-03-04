tm.define("MusicButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_musicButton";
		var width = 200;
		var height = 60;
		var x = 550;
		var y = 200;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMusic : function() {
		this.getController().moveToMusic();
	},
})