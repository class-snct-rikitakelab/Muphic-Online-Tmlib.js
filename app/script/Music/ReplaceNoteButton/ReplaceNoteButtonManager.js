tm.define("ReplaceNoteButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = ReplaceNoteButtonModel(this, scene);
		this.view = ReplaceNoteButtonView(this);
		this.controller = ReplaceNoteButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	showReplaceNoteFocus : function() {
		if(this.getPianoButton().getIsAvailable()) {
			this.getPianoButton().reset();
		}

		if(this.getClarinetButton().getIsAvailable()) {
			this.getClarinetButton().reset();
		}

		if(this.getSaxButton().getIsAvailable()) {
			this.getSaxButton().reset(); 
		}

		this.setPushState();
		this.getHumen().getHumen().setShowReplaceNoteFocusState();
	},
	reset : function() {
		this.setEnableState();
		this.getHumen().getHumen().setDisableState();
	},
	getIsAvailable : function() {
		return this.getModel().getIsAvailable();
	},
	setEnableState : function() {
		this.getView().setState(ReplaceNoteButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(ReplaceNoteButtonPushState(this.getView()));
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
	getClarinetButton : function() { return this.clarinetButton; },
	setClarinetButton : function(clarinetButton) { this.clarinetButton = clarinetButton; },
	getSaxButton : function() { return this.saxButton; },
	setSaxButton : function(saxButton) { this.saxButton = saxButton; },

})