tm.define("MyShopButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().moveToMyShop(this.getParent().getManager().getButtonNumber());
	},
})