tm.define("FirstButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, mediator) {
		this.superInit();
		this.model = FirstButtonModel(this, scene);
		this.view = FirstButtonView(this);
		this.controller = FirstButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
		this.setMediator(mediator);
	},
	back : function() {
		this.getMediator().first();
	},
	setEnableState : function() {
		this.getView().setState(FirstButtonEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})