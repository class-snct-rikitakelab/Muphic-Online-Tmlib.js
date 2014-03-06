tm.define("CloseButtonManager", {
	superClass : "IllustButtonManager",
	init : function(scene, mediator) {
		this.superInit();
		this.model = CloseButtonModel(this, scene);
		this.view = CloseButtonView(this);
		this.controller = CloseButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	removePalette : function() {
		this.getMediator().removePalette();
		this.getMediator().enableOtherObject();
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})