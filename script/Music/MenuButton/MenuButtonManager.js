tm.define("Music_MenuButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y) {
		this.superInit();
		this.model = Music_MenuButtonModel(this, scene);
		this.view = Music_MenuButtonView(this,x,y);
		this.controller = Music_MenuButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(Music_MenuButtonEnableState(this.getView()));
	},
})