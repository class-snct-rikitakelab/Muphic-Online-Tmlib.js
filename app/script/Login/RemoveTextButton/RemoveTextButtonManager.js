tm.define("RemoveTextButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = RemoveTextButtonModel(this, scene);
		this.view = RemoveTextButtonView(this);
		this.controller = RemoveTextButtonController(this);
		this.textbox = null;
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	},
	removeCharacter : function() {
		this.getTextbox().removeCharacter();
	},
	setEnableState : function() {
		this.getView().setState(RemoveTextButtonEnableState(this.getView()));
	},

	getTextbox : function() { return this.textbox; },
	setTextbox : function(textbox) { this.textbox = textbox; },
})