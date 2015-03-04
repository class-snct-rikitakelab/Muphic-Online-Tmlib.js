tm.define("MenuScene", {
	superClass : "tm.app.Scene",

	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);
		this.musicButton = MusicButtonManager(this);
		this.myshopButton = MyShopButtonManager(this);
		this.friendsshopButton = FriendsShopButtonManager(this);
		this.officialshopButton = OfficialShopButtonManager(this);
		this.optionButton = OptionButtonManager(this);

		menuScene = this;
	},
//	moveToMyShop : function() {
//		MyShopScene();
//	}

})