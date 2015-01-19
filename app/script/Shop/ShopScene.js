tm.define("ShopScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = ShopBackgroundManager(this);
	}
})