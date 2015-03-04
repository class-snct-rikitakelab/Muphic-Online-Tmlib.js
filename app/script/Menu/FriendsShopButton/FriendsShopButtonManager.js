tm.define("FriendsShopButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene,x,y,number) {
		this.superInit();
		this.model = FriendsShopButtonModel(this, scene);
		this.view = FriendsShopButtonView(this);
		this.controller = FriendsShopButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setButtonNumber(number);
		this.addToScene();
		this.setEnableState();
	},
	setEnableState : function() {
		this.getView().setState(FriendsShopButtonEnableState(this.getView()));
	},
})