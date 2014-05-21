tm.define("Menu_MusicButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y) {
		this.superInit();
		this.model = Menu_MusicButtonModel(this, scene);
		this.view = Menu_MusicButtonView(this,x,y);
		this.controller = Menu_MusicButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(Menu_MusicButtonEnableState(this.getView()));
	},
})