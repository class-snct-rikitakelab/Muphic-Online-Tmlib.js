tm.define("StorySelectButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,buttonNumber) {
		this.superInit();
		this.model = new StorySelectButtonModel(this, scene);
		this.view = new StorySelectButtonView(this,x,y,buttonNumber);
		this.controller = new StorySelectButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(buttonNumber);
		this.addToScene();
	},
	setEnableState : function() {
		this.getView().setState(StorySelectButtonEnableState(this.getView()));
	},
})