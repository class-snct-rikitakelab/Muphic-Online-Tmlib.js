tm.define("OfficialShopButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().moveToOfficialShop(this.getParent().getManager().getButtonNumber());
	},
})