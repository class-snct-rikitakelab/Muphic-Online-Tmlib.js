tm.define("IllustFocusManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = IllustFocusModel(this, scene);
		this.view = IllustFocusView(this);
		this.controller = IllustFocusController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);												//Mediator = 影の実体化用変数？
	},

	createIllust : function(illust) {
		this.getMediator().createIllust(illust);								//描画部分に関わっている
		this.getMediator().enableOtherObject();									//新しいオブジェクトを置くことを許可する
		this.getController().removeFromScene();									// ??
	},
	startUpdate : function() {
		if(this.getModel().getIllust() === null) return;
		this.getView().setIsUpdate(true);
	},
	stopUpdate : function() {
		if(this.getModel().getIllust() === null) return;
		this.getView().setIsUpdate(false);
	},
	//画像変更
	changeIllust : function(illust) {
		this.getModel().changeIllust(illust);
	},
	//影
	getIllustFocus : function() {
		return this.getModel().getIllustFocusData();
	},
	setEnableState : function() {
		this.getView().setState(IllustFocusEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})