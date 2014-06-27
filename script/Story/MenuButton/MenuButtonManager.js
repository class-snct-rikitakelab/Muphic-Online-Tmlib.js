tm.define("Story_MenuButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y) {
		this.superInit();
		this.model = Story_MenuButtonModel(this, scene);
		this.view = Story_MenuButtonView(this,x,y);
		this.controller = Story_MenuButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(Story_MenuButtonEnableState(this.getView()));
	},
})