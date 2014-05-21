tm.define("Menu_StoryButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = Menu_StoryButtonModel(this, scene);
		this.view = Menu_StoryButtonView(this);
		this.controller = Menu_StoryButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(StoryButtonEnableState(this.getView()));
	},
})