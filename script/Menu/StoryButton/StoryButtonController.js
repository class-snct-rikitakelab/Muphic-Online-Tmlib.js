tm.define("Menu_StoryButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToStory : function(x) {
		if(storySceneArray[x] === null) {
			app.replaceScene(StoryScene());
		} else {
			app.replaceScene(storyScene);
		}
	},
})