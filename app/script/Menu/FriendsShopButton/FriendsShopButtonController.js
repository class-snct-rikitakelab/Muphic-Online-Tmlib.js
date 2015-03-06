tm.define("FriendsShopButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToFriendsShop : function() {		//実装後変更が必要
		if(menuScene === null) {
			app.replaceScene(MenuScene());
		} else {
			app.replaceScene(menuScene);
		}
	},
})