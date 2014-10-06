tm.define("BackgroundThumbnailManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, weather, background) {
		this.superInit();
		this.model = BackgroundThumbnailModel(this, scene, weather, background);
		this.view = BackgroundThumbnailView(this, weather, background);
		this.controller = BackgroundThumbnailController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	changeWeather : function(weather) {
		this.getModel().changeWeather(weather);
	},
	changeBackground : function(backgroundIllust) {
		this.getMediator().changeBackground(backgroundIllust);
	},
	setEnableState : function() {
		this.getView().setState(BackgroundThumbnailEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})