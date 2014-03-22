tm.define("MusicButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToMusic : function() {
		if(musicScene === null) {
			app.replaceScene(MusicScene());
		} else {
			app.replaceScene(musicScene);
		}
	},
})