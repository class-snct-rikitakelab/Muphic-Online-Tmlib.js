tm.define("Menu_MusicButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new Menu_MusicButtonModel(this, scene);
		this.view = new Menu_MusicButtonView(this,x,y);
		this.controller = new Menu_MusicButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(Menu_MusicButtonEnableState(this.getView()));
	},
})