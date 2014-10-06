tm.define("BackgroundPaletteFrameManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = BackgroundPaletteFrameModel(this, scene);
		this.view = BackgroundPaletteFrameView(this);
		this.controller = BackgroundPaletteFrameController(this);
		this.initModel();
		this.initView();
		this.initController();
	}
})