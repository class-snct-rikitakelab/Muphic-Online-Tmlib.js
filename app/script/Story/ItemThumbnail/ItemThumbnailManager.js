tm.define("ItemThumbnailManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, category, item) {
		this.superInit();
		this.model = ItemThumbnailModel(this, scene, category, item);
		this.view = ItemThumbnailView(this, category, item);
		this.controller = ItemThumbnailController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	selectIllust : function(illust) {
		this.getMediator().selectIllust(illust);
	},
	setEnableState : function() {
		this.getView().setState(ObjectThumbnailEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})