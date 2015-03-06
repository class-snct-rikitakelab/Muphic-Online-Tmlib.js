tm.define("BoardView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "menu_board";
		var width = 974;
		var height = 250;
		var x = 25;
		var y = 420;
		this.superInit(image, width, height, x, y, manager);
	}
})