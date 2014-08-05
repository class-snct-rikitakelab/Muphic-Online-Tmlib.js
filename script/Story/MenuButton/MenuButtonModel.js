tm.define("StoryMenuButtonModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
	},


	obtainStoryBackground : function(){return this.scene.previewScreen.getBackground();}
})