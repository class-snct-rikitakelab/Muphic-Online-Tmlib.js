tm.define("MusicButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = MusicButtonModel(this, scene);
		this.view = MusicButtonView(this);
		this.controller = MusicButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})