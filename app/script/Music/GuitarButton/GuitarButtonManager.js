tm.define("GuitarButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = GuitarButtonModel(this, scene);
		this.view = GuitarButtonView(this);
		this.controller = GuitarButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	showNoteFocus : function() {
		if(this.getRemoveNoteButton().getIsAvailable()) {
			this.getRemoveNoteButton().reset();
		}
		this.setPushState();
		this.getHumen().getHumen().setShowNoteFocusState();
	},
	reset : function() {
		this.setEnableState();
		this.getHumen().getHumen().setDisableState();
	},
	getIsAvailable : function() {
		return this.getModel().getIsAvailable();
	},
	setEnableState : function() {
		this.getView().setState(GuitarButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(GuitarButtonPushState(this.getView()));
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
})