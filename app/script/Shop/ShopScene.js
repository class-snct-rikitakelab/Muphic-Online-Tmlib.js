tm.define("MyShopScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = ShopBackgroundManager(this);
		this.menuButton = MenuButtonManager(this);

		myshopScene = this;
	}
})