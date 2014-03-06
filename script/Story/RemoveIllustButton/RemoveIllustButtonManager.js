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
		this.setDisableState();
		this.addToScene();
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

	getPreviewScreen : function() { return this.previewScreen; },
	setPreviewScreen : function(previewScreen) { this.previewScreen = previewScreen; },
})