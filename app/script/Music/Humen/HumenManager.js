tm.define("HumenManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = HumenModel(this, scene);
		this.view = HumenView(this);
		this.controller = HumenController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
		this.setMediator(mediator);
	},
	showNoteFocus : function() {
		this.getMediator().showNoteFocus();
	},
	hideNoteFocus : function() {
		this.getMediator().hideNoteFocus();
	},
	showRemoveNoteFocus : function() {
		this.getMediator().showRemoveNoteFocus();
	},
	hideRemoveNoteFocus : function() {
		this.getMediator().hideRemoveNoteFocus();
	},
	setDisableState : function() {
		this.getView().setState(HumenDisableState(this.getView()));
	},
	setDarkState : function() {
		this.getView().setState(HumenDarkState(this.getView()));
	},
	setShowNoteFocusState : function() {
		this.getView().setState(HumenShowNoteFocusState(this.getView()));
	},
	setShowRemoveNoteFocusState : function() {
		this.getView().setState(HumenShowRemoveNoteFocusState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})