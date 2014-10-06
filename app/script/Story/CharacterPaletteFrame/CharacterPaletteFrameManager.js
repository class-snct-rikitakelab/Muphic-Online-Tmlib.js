tm.define("CharacterPaletteFrameManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = CharacterPaletteFrameModel(this, scene);
		this.view = CharacterPaletteFrameView(this);
		this.controller = CharacterPaletteFrameController(this);
		this.initModel();
		this.initView();
		this.initController();
	}
})