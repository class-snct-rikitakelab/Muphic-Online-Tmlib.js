tm.define("OfficialShopButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_dummyButton";
		var width = 200;
		var height = 60;
		var x = 550;
		var y = 300;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToOfficialShop : function() {
		this.getController().moveToOfficialShop();
	},
})