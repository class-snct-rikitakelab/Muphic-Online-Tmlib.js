tm.define("StartButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "top_startButton";
		var width = 128;
		var height = 128;
		var x = 630;
		var y = 280;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToLogin : function() {
		this.getController().moveToLogin();
	},
})