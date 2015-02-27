tm.define("MenuScene", {
	superClass : "tm.app.Scene",

	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);
		this.musicButton = MusicButtonManager(this);
		this.shopButton = ShopButtonManager(this);

		menuScene = this;
	},
	moveToShop : function() {
		ShopScene();
	}

})