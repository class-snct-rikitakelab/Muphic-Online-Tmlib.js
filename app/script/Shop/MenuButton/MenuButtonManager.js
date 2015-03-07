tm.define("MenuButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y) {
		this.superInit();
		this.model =MenuButtonModel(this, scene);
		this.view = MenuButtonView(this,x,y);
		this.controller = MenuButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(MenuButtonEnableState(this.getView()));
	},
})