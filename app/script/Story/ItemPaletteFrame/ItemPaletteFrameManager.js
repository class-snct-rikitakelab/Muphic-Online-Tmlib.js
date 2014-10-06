tm.define("ItemPaletteFrameManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = ItemPaletteFrameModel(this, scene);
		this.view = ItemPaletteFrameView(this);
		this.controller = ItemPaletteFrameController(this);
		this.initModel();
		this.initView();
		this.initController();
	}
})