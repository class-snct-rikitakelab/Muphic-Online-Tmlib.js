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
		this.setDarkState();
	},
	showNoteFocus : function() {
		if(this.getRemoveNoteButton().getIsAvailable()) {
			this.getRemoveNoteButton().reset();
		}

		if(this.getGuitarButton().getIsAvailable()) {
			this.getGuitarButton().reset();
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
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getGuitarButton : function() { return this.guitarButton; },
	setGuitarButton : function(guitarButton) { this.guitarButton = guitarButton; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
})