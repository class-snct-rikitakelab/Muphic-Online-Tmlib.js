tm.define("ItemButtonManager", {
	superClass : "IllustButtonManager",
	init : function(scene) {
		this.superInit();
		this.model = ItemButtonModel(this, scene);
		this.view = ItemButtonView(this);
		this.controller = ItemButtonController(this);
		this.palette = ItemPalette(scene);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})