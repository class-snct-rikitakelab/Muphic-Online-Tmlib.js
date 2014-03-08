tm.define("StoryButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = StoryButtonModel(this, scene);
		this.view = StoryButtonView(this);
		this.controller = StoryButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
})