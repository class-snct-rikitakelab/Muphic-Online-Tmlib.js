tm.define("MusicScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = MusicBackgroundManager(this);
		this.storyButton = StoryButtonManager(this);
	},
})