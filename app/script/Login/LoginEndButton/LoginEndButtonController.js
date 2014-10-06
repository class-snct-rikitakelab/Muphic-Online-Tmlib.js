tm.define("LoginEndButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToStory : function() {
		userName = this.getManager().getUserName();
		if(storyScene === null) {
			app.replaceScene(StoryScene());
		} else {
			app.replaceScene(storyScene);
		}
	},
})