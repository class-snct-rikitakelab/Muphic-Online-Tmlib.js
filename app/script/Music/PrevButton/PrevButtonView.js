tm.define("PrevButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_prevButton";
		var width = 36;
		var height = 42;
		var x = 130;
		var y = 651;
		this.superInit(image, width, height, x, y, manager);
	},
	back : function() {
		this.getController().back();
	},
})