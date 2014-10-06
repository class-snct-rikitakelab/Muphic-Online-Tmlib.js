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
		if(this.getMediator().countIllust() > 0) {
			this.getMediator().enableRemoveIllustButton();
		} else {
			this.getMediator().disableRemoveIllustButton();
		}
	},
	setEnableState : function() {
		this.getView().setState(CloseButtonEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})