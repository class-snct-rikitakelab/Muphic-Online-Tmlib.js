tm.define("BoardManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator) {
		this.superInit();
		this.model = BoardModel(this, scene);
		this.view = BoardView(this);
		this.controller = BoardController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.addToScene();
		this.setDisableState();
		this.setMediator(mediator);
	},
	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})