tm.define("LastButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene, mediator) {
		this.superInit();
		this.model = LastButtonModel(this, scene);
		this.view = LastButtonView(this);
		this.controller = LastButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
<<<<<<< HEAD
		this.setDarkState();
		this.setMediator(mediator);
	},
	forward : function() {
		this.getMediator().last();
	},
	setEnableState : function() {
		this.getView().setState(NextButtonEnableState(this.getView()));
=======
		this.setEnableState();
		this.setMediator(mediator);
	},
	forward : function() {
		this.getMediator().forward();
	},
	setEnableState : function() {
		this.getView().setState(LastButtonEnableState(this.getView()));
>>>>>>> origin/html
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})