tm.define("MenuBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = MenuBackgroundModel(this, scene);
		this.view = MenuBackgroundView(this);
		this.controller = MenuBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	}
})