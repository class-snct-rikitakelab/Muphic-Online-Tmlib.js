tm.define("StoryButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new StoryButtonModel(this, scene);
		this.view = new StoryButtonView(this,x,y);
		this.controller = new StoryButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(StoryButtonEnableState(this.getView()));
	},
})