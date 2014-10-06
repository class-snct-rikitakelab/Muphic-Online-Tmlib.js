tm.define("StoryBackgroundManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = StoryBackgroundModel(this, scene);
		this.view = StoryBackgroundView(this);
		this.controller = StoryBackgroundController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	}
})