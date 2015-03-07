tm.define("MyShopScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = ShopBackgroundManager(this);
		this.menuButton = MenuButtonManager(this);
		this.screen - Screen(this);

		myshopScene = this;
	}
})