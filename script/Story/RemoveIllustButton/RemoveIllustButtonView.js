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
	startRemoveFocusUpdate : function() {
		this.getController().startRemoveFocusUpdate();
	},
	stopRemoveFocusUpdate : function() {
		this.getController().stopRemoveFocusUpdate();
	},
	setIsAvailable : function(isAvailable) {
		this.getModel().setIsAvailable(isAvailable);
	},
})