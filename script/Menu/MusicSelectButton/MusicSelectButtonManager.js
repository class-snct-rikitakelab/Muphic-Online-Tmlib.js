tm.define("MusicSelectButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new MusicSelectButtonModel(this, scene);
		this.view = new MusicSelectButtonView(this,x,y);
		this.controller = new MusicSelectButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(MusicSelectButtonEnableState(this.getView()));
	},
})