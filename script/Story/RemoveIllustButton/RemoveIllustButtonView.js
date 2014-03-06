tm.define("RemoveIllustButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_removeIllustButton";
		var width = 106;
		var height = 72;
		var x = 885;
		var y = 200;
		this.superInit(image, width, height, x, y, manager);
	},
	pointingEndAction : function() {
		this.getController().switchRemove();
	},
	pointingOutAction : function() {
		if(!this.getModel().getIsAvailable()) {
			this.changeImage(this.getOffImage());
		} else {
			this.changeImage(this.getPushImage());
		}
	},
})