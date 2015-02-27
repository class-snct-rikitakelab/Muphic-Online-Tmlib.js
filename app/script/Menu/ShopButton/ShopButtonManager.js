tm.define("ShopButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = ShopButtonModel(this, scene);
		this.view = ShopButtonView(this);
		this.controller = ShopButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(ShopButtonEnableState(this.getView()));
	},
})