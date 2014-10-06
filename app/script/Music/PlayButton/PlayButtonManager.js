tm.define("PlayButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = PlayButtonModel(this, scene);
		this.view = PlayButtonView(this);
		this.controller = PlayButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDarkState();
	},
	play : function() {
		this.getHumen().play();
	},
	setEnableState : function() {
		this.getView().setState(PlayButtonEnableState(this.getView()));
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
})