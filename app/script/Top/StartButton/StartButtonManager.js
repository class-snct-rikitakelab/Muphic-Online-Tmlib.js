tm.define("StartButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = StartButtonModel(this, scene);
		this.view = StartButtonView(this);
		this.controller = StartButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(StartButtonEnableState(this.getView()));
	},
})