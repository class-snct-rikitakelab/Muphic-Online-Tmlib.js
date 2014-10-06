tm.define("BackgroundButtonManager", {
	superClass : "IllustButtonManager",
	init : function(scene) {
		this.superInit();
		this.model = BackgroundButtonModel(this, scene);
		this.view = BackgroundButtonView(this);
		this.controller = BackgroundButtonController(this);
		this.palette = BackgroundPalette(scene);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})