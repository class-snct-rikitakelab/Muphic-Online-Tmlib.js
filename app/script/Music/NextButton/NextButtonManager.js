tm.define("NextButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, mediator) {
		this.superInit();
		this.model = NextButtonModel(this, scene);
		this.view = NextButtonView(this);
		this.controller = NextButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
		this.setMediator(mediator);
	},
	forward : function() {
		this.getMediator().forward();
	},
	setEnableState : function() {
		this.getView().setState(NextButtonEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})