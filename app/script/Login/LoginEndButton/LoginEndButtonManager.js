tm.define("LoginEndButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = LoginEndButtonModel(this, scene);
		this.view = LoginEndButtonView(this);
		this.controller = LoginEndButtonController(this);
		this.textbox = null;
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	},
	getUserName : function() {
		return this.getTextbox().getText();
	},
	setEnableState : function() {
		this.getView().setState(LoginEndButtonEnableState(this.getView()));
	},

	getTextbox : function() { return this.textbox; },
	setTextbox : function(textbox) { this.textbox = textbox; },
})