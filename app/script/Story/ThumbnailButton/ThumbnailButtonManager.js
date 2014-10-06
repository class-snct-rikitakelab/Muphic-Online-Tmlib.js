tm.define("ThumbnailButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, mediator, icon) {
		this.superInit();
		this.model = ThumbnailButtonModel(this, scene, icon);
		this.view = ThumbnailButtonView(this, icon);
		this.controller = ThumbnailButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	changeThumbnail : function(icon) {
		this.getMediator().changeThumbnail(icon);
	},
	getIcon : function() {
		return this.getModel().getIcon();
	},
	setEnableState : function() {
		this.getView().setState(ThumbnailButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(ThumbnailButtonPushState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})