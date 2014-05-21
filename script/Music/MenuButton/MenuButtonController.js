tm.define("Music_MenuButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToMenu : function() {
		if(menuScene === null) {
			app.replaceScene(MenuScene());
		} else {
			app.replaceScene(menuScene);
		}
	},
})