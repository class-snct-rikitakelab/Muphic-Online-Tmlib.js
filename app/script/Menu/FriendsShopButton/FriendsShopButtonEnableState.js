tm.define("FriendsShopButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().moveToFriendsShop(this.getParent().getManager().getButtonNumber());
	},
})