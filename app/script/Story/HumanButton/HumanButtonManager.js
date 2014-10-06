tm.define("HumanButtonManager", {
	superClass : "IllustButtonManager",
	init : function(scene) {
		this.superInit();
		this.model = HumanButtonModel(this, scene);
		this.view = HumanButtonView(this);
		this.controller = HumanButtonController(this);
		this.palette = HumanPalette(scene);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})