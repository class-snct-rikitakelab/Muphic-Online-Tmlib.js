tm.define("PreviewScreenManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = PreviewScreenModel(this, scene);
		this.view = PreviewScreenView(this);
		this.controller = PreviewScreenController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
		this.setMediator(mediator);
	},
	startIllustFocusUpdate : function() {
		this.getMediator().startIllustFocusUpdate();
	},
	stopIllustFocusUpdate : function() {
		this.getMediator().stopIllustFocusUpdate();
	},
	setEnableState : function() {
		this.getView().setState(PreviewScreenEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})