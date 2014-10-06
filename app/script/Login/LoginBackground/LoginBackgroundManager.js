tm.define("LoginBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = LoginBackgroundModel(this, scene);
		this.view = LoginBackgroundView(this);
		this.controller = LoginBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	}
})