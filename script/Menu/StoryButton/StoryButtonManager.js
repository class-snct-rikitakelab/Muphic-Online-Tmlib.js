tm.define("Menu_StoryButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = new Menu_StoryButtonModel(this, scene);
		this.view = new Menu_StoryButtonView(this,x,y);
		this.controller = new Menu_StoryButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setDarkState();
	},
	setEnableState : function() {
		this.getView().setState(Menu_StoryButtonEnableState(this.getView()));
	},
})