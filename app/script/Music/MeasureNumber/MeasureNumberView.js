tm.define("MeasureNumberView", {
	superClass : "MVCViewSprite",
	init : function(manager, number, x, y) {
		var image = NUMBER[number];
		var width = 18;
		var height = 19;
		this.superInit(image, width, height, x, y, manager);
	},
	renew : function() {
		var number = this.getModel().getNumber();
		var image = NUMBER[number];
		this.changeImage(image);
	},
})