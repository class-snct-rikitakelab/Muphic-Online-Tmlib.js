tm.define("PrevButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, mediator) {
		this.superInit();
		this.model = PrevButtonModel(this, scene);
		this.view = PrevButtonView(this);
		this.controller = PrevButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
		this.setMediator(mediator);
	},
	back : function() {
		this.getMediator().back();
	},
	setEnableState : function() {
		this.getView().setState(PrevButtonEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})