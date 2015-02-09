tm.define("RemoveAllNoteButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = RemoveAllNoteButtonModel(this, scene);
		this.view = RemoveAllNoteButtonView(this);
		this.controller = RemoveAllNoteButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	showRemoveNoteFocus : function() {
//		this.setPushState();
		this.getHumen().getRemoveNoteFocus().resetNote();
		this.getHumen().first();
		console.log("do");
	},
/*	reset : function() {
		this.setEnableState();
		this.getHumen().getHumen().setDisableState();
	},
	getIsAvailable : function() {
		return this.getModel().getIsAvailable();
	},*/
	setEnableState : function() {
		this.getView().setState(RemoveNoteButtonEnableState(this.getView()));
	},
//	setPushState : function() {
//		this.getView().setState(RemoveNoteButtonPushState(this.getView()));
//	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
	getClarinetButton : function() { return this.clarinetButton; },
	setClarinetButton : function(clarinetButton) { this.clarinetButton = clarinetButton; },
	getSaxButton : function() { return this.saxButton; },
	setSaxButton : function(saxButton) { this.saxButton = saxButton; },

})