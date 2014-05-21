tm.define("MenuBackgroundView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "menu_background";
		var width = 1024;
		var height = 768;
		var x = 0;
		var y = 0;
		this.superInit(image, width, height, x, y, manager);
	}
})