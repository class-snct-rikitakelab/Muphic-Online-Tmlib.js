tm.define("AnimalButtonManager", {
	superClass : "IllustButtonManager",
	init : function(scene) {
		this.superInit();
		this.model = AnimalButtonModel(this, scene);
		this.view = AnimalButtonView(this);
		this.controller = AnimalButtonController(this);
		this.palette = AnimalPalette(scene);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})