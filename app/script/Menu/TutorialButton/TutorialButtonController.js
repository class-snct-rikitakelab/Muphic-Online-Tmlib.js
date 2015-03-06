tm.define("TutorialButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToTutorial : function() {		//実装後変更が必要
		if(menuScene === null) {
			app.replaceScene(MenuScene());
		} else {
			app.replaceScene(menuScene);
		}
	},
})