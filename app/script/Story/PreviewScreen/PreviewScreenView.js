tm.define("PreviewScreenView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "story_previewScreen";
		var width = 690;
		var height = 460;
		var x = 167;
		var y = 200;
		this.superInit(image, width, height, x, y, manager);
	},
	startIllustFocusUpdate : function() {
		this.getController().startIllustFocusUpdate();
	},
	stopIllustFocusUpdate : function() {
		this.getController().stopIllustFocusUpdate();
	},
})