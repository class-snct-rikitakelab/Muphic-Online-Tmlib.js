tm.define("OptionButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = OptionButtonModel(this, scene);
		this.view = OptionButtonView(this);
		this.controller = OptionButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(OptionButtonEnableState(this.getView()));
	},
})