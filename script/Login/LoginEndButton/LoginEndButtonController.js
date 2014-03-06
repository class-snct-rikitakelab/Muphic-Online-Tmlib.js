tm.define("LoginEndButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToStory : function() {
		userName = this.getManager().getUserName();
		alert(userName);
		//app.replaceScene(StoryScene());
	},
})