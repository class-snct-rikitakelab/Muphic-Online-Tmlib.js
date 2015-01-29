tm.define("NextButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "music_nextButton";
		var width = 36;
		var height = 42;
		var x = 800;	//860
		var y = 651;
		this.superInit(image, width, height, x, y, manager);
	},
	forward : function() {
		this.getController().forward();
	},
})