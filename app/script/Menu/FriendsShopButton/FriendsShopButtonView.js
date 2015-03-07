tm.define("FriendsShopButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "menu_friendsShopButton";
		var width = 200;
		var height = 60;
		var x = 800;
		var y = 200;
		this.superInit(image, width, height, x, y, manager);
	},
	moveToFriendsShop : function() {
		this.getController().moveToFriendsShop();
	},
})