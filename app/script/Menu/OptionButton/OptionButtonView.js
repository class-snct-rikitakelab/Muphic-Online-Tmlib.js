tm.define("OptionButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_optionButton";
		var width = 200;
		var height = 60;
		var x = 800;
		var y = 300;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToOption : function() {
		this.getController().moveToOption();
	},
})