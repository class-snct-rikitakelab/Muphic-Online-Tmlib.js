tm.define("IllustManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, illust) {
		this.superInit();
		this.model = IllustModel(this, scene, illust);
		this.view = IllustView(this, illust);
		this.controller = IllustController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setDisableState();
		this.addToScene();
		this.setMediator(mediator);
	},
	destroyIllust : function() {
		this.getMediator().removeStamp(this);
	},
	setEnableState : function() {
		this.getView().setState(IllustEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})