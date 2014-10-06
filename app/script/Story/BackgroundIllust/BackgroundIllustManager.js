tm.define("BackgroundIllustManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = BackgroundIllustModel(this, scene);
		this.view = BackgroundIllustView();
		this.controller = BackgroundIllustController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
		this.setMediator(mediator);
	},
	changeBackground : function(backgroundIllust) {
		this.getModel().changeBackground(backgroundIllust);
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})