tm.define("MyShopButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_shopButton";
		var width = 500;
		var height = 300;
		var x = 25;
		var y = 100;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToMyShop : function() {
		this.getController().moveToMyShop();
	},
})