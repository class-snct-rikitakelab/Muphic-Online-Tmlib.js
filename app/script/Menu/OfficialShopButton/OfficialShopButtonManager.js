tm.define("OfficialShopButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = OfficialShopButtonModel(this, scene);
		this.view = OfficialShopButtonView(this);
		this.controller = OfficialShopButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(OfficialShopButtonEnableState(this.getView()));
	},
})