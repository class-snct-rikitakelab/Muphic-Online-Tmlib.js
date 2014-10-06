tm.define("StoryMenuButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y) {
		this.superInit();
		this.model = StoryMenuButtonModel(this, scene);
		this.view = StoryMenuButtonView(this,x,y);
		this.controller = StoryMenuButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(StoryMenuButtonEnableState(this.getView()));
	},
})