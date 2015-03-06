tm.define("MusicButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = MusicButtonModel(this, scene);
		this.view = MusicButtonView(this);
		this.controller = MusicButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(MusicButtonEnableState(this.getView()));
	},
})