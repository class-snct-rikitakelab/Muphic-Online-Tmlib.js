tm.define("SaxButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = SaxButtonModel(this, scene);
		this.view = SaxButtonView(this);
		this.controller = SaxButtonController(this);
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

		if(this.getPianoButton().getIsAvailable()) {
			this.getPianoButton().reset(); 
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
		this.getView().setState(ClarinetButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(ClarinetButtonPushState(this.getView()));
		sound = "sax";
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
	getClarinetButton : function() { return this.clarinetButton; },
	setClarinetButton : function(clarinetButton) { this.clarinetButton = clarinetButton; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
})