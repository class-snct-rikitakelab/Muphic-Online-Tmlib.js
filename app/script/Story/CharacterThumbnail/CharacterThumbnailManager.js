tm.define("CharacterThumbnailManager", {
	superClass : "MVCManagerSprite",
	init : function(scene, mediator, character, face, pose) {
		this.superInit();
		this.model = CharacterThumbnailModel(this, scene, character, face, pose);
		this.view = CharacterThumbnailView(this, character, face, pose);
		this.controller = CharacterThumbnailController(this);
		this.initModel();
		this.initView();
		this.initController();
		this.setEnableState();
		this.setMediator(mediator);
	},
	selectIllust : function(illust) {
		this.getMediator().selectIllust(illust);
	},
	changeCharacter : function(character) {
		this.getModel().changeCharacter(character);
	},
	setEnableState : function() {
		this.getView().setState(ObjectThumbnailEnableState(this.getView()));
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})