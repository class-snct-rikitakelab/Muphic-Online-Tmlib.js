tm.define("MyShopButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	moveToMyShop : function() {
		if(myshopScene === null) {
			app.replaceScene(MyShopScene());
		} else {
			app.replaceScene(myshopScene);
		}
	},
})