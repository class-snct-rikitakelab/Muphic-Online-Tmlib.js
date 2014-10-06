tm.define("MeasureNumberManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, number, x, y) {
		this.superInit();
		this.model = MeasureNumberModel(this, scene, number);
		this.view = MeasureNumberView(this, number, x, y);
		this.controller = MeasureNumberController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.addToScene();
		this.setMediator(mediator);
	},
	forward : function(count) {
		this.getModel().forward(count);
	},
	back : function(count) {
		this.getModel().back(count);
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})