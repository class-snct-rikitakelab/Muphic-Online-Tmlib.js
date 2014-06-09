tm.define("StorySelectButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new StorySelectButtonModel(this, scene);
		this.view = new StorySelectButtonView(this,x,y);
		this.controller = new StorySelectButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(StorySelectButtonEnableState(this.getView()));
	},
})