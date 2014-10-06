tm.define("RemoveFocusManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = RemoveFocusModel(this, scene);
		this.view = RemoveFocusView(this);
		this.controller = RemoveFocusController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	startUpdate : function() {
		this.getView().setIsUpdate(true);
	},
	stopUpdate : function() {
		this.getView().setIsUpdate(false);
	},
	resetPosition : function() {
		this.getView().resetPosition();
	},
	getAllIllust : function() {
		return this.getMediator().getStamps();
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})