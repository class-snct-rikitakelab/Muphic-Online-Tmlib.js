tm.define("TutorialButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = TutorialButtonModel(this, scene);
		this.view = TutorialButtonView(this);
		this.controller = TutorialButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(TutorialButtonEnableState(this.getView()));
	},
})