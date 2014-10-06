tm.define("MVCManagerSprite", {
	init : function() {
		this.model = null;
		this.view = null;
		this.controller = null;
	},
	initModel : function() {
		this.model.addObserver(this.view);
	},
	initView : function() {
		this.view.setModel(this.model);
		this.view.setController(this.controller);
	},
	initController : function() {
		this.controller.setModel(this.model);
		this.controller.setView(this.view);
	},
	addToScene : function() {
		this.getController().addToScene();
	},
	removeFromScene : function() {
		this.getController().removeFromScene();
	},
	giveOriginState : function() {
		this.getView().setOriginState(this.getView().getState());
	},
	setOriginState : function() {
		this.getView().setState(new (this.getView().getOriginState().constructor)(this.getView()));
	},
	setEnableState : function() {
		this.getView().setState(new SpriteEnableState(this.getView()));
	},
	setDisableState : function() {
		this.getView().setState(new SpriteDisableState(this.getView()));
	},
	setDarkState : function() {
		this.getView().setState(new SpriteDarkState(this.getView()));
	},

	getModel : function() { return this.model; },
	setModel : function(model) { this.model = model; },
	getView : function() { return this.view; },
	setView : function(view) { this.view = view; },
	getController : function() { return this.controller; },
	setController : function(controller) { this.controller = controller; },
})