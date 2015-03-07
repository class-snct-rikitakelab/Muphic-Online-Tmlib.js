tm.define("ScreenManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = ScreenModel(this, scene);
		this.view = ScreenView(this);
		this.controller = ScreenController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
		this.setMediator(mediator);
	},
	
	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})