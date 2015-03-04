tm.define("MyShopButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = MyShopButtonModel(this, scene);
		this.view = MyShopButtonView(this);
		this.controller = MyShopButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(MyShopButtonEnableState(this.getView()));
	},
})