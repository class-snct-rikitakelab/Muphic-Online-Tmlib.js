tm.define("NoteManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, note) {
		this.superInit();
		this.model = NoteModel(this, scene, note);
		this.view = NoteView(this, note);
		this.controller = NoteController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	addChild : function(note) {
		this.getMediator().addChild(note);
	},
	inRange : function(startNumber, endNumber) {
		return this.getController().inRange(startNumber, endNumber);
	},
	play : function() {
		this.getView().settingPlay();
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})