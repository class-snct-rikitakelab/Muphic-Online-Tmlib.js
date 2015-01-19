tm.define("ShopBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = ShopBackgroundModel(this, scene);
		this.view = ShopBackgroundView(this);
		this.controller = ShopBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	}
})