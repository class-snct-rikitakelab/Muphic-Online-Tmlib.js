tm.define("StorySelectButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToStory : function(x) {
		if(storySceneArray[x] === null) {
			app.replaceScene(StoryScene(x));
		} else {
			app.replaceScene(storySceneArray[x]);
		}
	},
})