tm.define("ShopButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToShop : function() {
		if(shopScene === null) {
			app.replaceScene(ShopScene());
		} else {
			app.replaceScene(shopScene);
		}
	},
})