tm.define("MusicButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new MusicButtonModel(this, scene);
		this.view = new MusicButtonView(this,x,y);
		this.controller = new MusicButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(MusicButtonEnableState(this.getView()));
	},
})