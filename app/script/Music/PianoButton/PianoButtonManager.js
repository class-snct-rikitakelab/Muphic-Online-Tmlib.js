tm.define("PianoButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = PianoButtonModel(this, scene);
		this.view = PianoButtonView(this);
		this.controller = PianoButtonController(this);
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

		if(this.getClarinetButton().getIsAvailable()) {
			this.getClarinetButton().reset();
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
		this.getView().setState(PianoButtonEnableState(this.getView()));
	},
	setPushState : function() {
		this.getView().setState(PianoButtonPushState(this.getView()));
		sound = "piano";
		animal = "cat";
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getClarinetButton : function() { return this.clarinetButton; },
	setClarinetButton : function(clarinetButton) { this.clarinetButton = clarinetButton; },
	getSaxButton : function() { return this.saxButton; },
	setSaxButton : function(saxButton) { this.saxButton = saxButton; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
})