tm.define("LoginEndButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "login_endButton";
		var width = 100;
		var height = 100;
		var x = 760;
		var y = 210;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToStory : function() {
		this.getController().moveToStory();
	},
})