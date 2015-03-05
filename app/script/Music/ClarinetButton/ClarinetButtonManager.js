tm.define("ClarinetButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = ClarinetButtonModel(this, scene);
		this.view = ClarinetButtonView(this);
		this.controller = ClarinetButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	showNoteFocus : function() {
		if(this.getRemoveNoteButton().getIsAvailable()) {
			this.getRemoveNoteButton().reset();
		}

		if(this.getReplaceNoteButton().getIsAvailable()) {
			this.getReplaceNoteButton().reset();
		}

		if(this.getPianoButton().getIsAvailable()) {
			this.getPianoButton().reset();
		}
		if(this.getSaxButton().getIsAvailable()) {
			this.getSaxButton().reset(); 
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
		sound = "clarinet";
		animal = "rabbit";
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
	getSaxButton : function() { return this.saxButton; },
	setSaxButton : function(saxButton) { this.saxButton = saxButton; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
	getReplaceNoteButton : function() { return this.replaceNoteButton; },
	setReplaceNoteButton : function(replaceNoteButton) { this.replaceNoteButton = replaceNoteButton; },
})