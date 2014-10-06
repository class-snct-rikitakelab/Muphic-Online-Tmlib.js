tm.define("RemoveNoteButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = RemoveNoteButtonModel(this, scene);
		this.view = RemoveNoteButtonView(this);
		this.controller = RemoveNoteButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	showRemoveNoteFocus : function() {
		if(this.getPianoButton().getIsAvailable()) {
			this.getPianoButton().reset();
		}
		this.setPushState();
		this.getHumen().getHumen().setShowRemoveNoteFocusState();
	},
	reset : function() {
		this.setEnableState();
		this.getHumen().getHumen().setDisableState();
	},
	getIsAvailable : function() {
		return this.getModel().getIsAvailable();
	},
	setEnableState : function() {
		this.getView().setState(RemoveNoteButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(RemoveNoteButtonPushState(this.getView()));
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
})