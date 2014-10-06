tm.define("TopBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = TopBackgroundModel(this, scene);
		this.view = TopBackgroundView(this);
		this.controller = TopBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	}
})