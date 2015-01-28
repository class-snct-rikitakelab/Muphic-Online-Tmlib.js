tm.define("MusicBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = MusicBackgroundModel(this, scene);
		this.view = MusicBackgroundView(this);
		this.controller = MusicBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
})