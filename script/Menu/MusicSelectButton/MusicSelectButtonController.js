tm.define("MusicSelectButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToMusic : function(x) {
		if(musicSceneArray[x] === null) {
			app.replaceScene(MusicScene(x));
		} else {
			app.replaceScene(musicSceneArray[x]);
		}
	},
})