tm.define("MenuThumbnailManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = MenuThumbnailModel(this, scene);
		this.view = MenuThumbnailView(this);
		this.controller = MenuThumbnailController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
//		this.setDarkState();
	}
})