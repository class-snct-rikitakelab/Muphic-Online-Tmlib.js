tm.define("RemoveIllustButtonManager", {
	superClass : "MVCManagerButton",
	init : function(scene) {
		this.superInit();
		this.model = RemoveIllustButtonModel(this, scene);
		this.view = RemoveIllustButtonView(this);
		this.controller = RemoveIllustButtonController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
	},
	startRemoveFocusUpdate : function() {
		this.getPreviewScreen().startRemoveFocusUpdate();
	},
	stopRemoveFocusUpdate : function() {
		this.getPreviewScreen().stopRemoveFocusUpdate();
	},
	setIsAvailable : function(isAvailable) {
		this.getModel().setIsAvailable(isAvailable);
	},
	//ボタンをマウスオーバーする関数を呼び出す関数？
	setEnableState : function() {
		this.getView().setState(RemoveIllustButtonEnableState(this.getView()));
	},
	//ボタンを押したときの関数を呼び出す関数？
	setPushState : function() {
		this.getView().setState(RemoveIllustButtonPushState(this.getView()));
	},

	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
})