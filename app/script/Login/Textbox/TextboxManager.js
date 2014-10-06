var TEXT_MAX = 15;

tm.define("TextboxManager", {
	superClass : "MVCManagerSprite",
	init : function(scene) {
		this.superInit();
		this.model = TextboxModel(this, scene);
		this.view = TextboxView(this);
		this.controller = TextboxController(this);
		this.removeTextButton = null;
		this.loginEndButton = null;
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.getView().initText();
		this.getView().initMessage();
	},
	addCharacter : function(character) {
		this.getModel().addCharacter(character);
		if(this.getModel().countText() === 1) {
			this.getRemoveTextButton().setEnableState();
			this.getLoginEndButton().setEnableState();
		}
	},
	removeCharacter : function() {
		this.getModel().removeCharacter();
		if(this.getModel().countText() === 0) {
			this.getRemoveTextButton().setDisableState();
			this.getLoginEndButton().setDisableState();
		}
	},
	getText : function() {
		return this.getModel().getText();
	},

	getRemoveTextButton : function() { return this.removeTextButton; },
	setRemoveTextButton : function(removeTextButton) { this.removeTextButton = removeTextButton; },
	getLoginEndButton : function() { return this.loginEndButton; },
	setLoginEndButton : function(loginEndButton) { this.loginEndButton = loginEndButton; },
})