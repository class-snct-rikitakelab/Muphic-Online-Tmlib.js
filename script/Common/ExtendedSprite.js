tm.define("ExtendedSprite", {
	superClass : "tm.display.Sprite",
	init : function(image, width, height, x, y) {
		this.superInit(image, width, height);
		this.setImageName(image);
		this.x = x + this.width / 2;			//全体の描画位置を決めるらしき変数
		this.y = y + this.height / 2;			//中心のデフォがが左上なので縦横それぞれ(長さ)/2ずつ足すようである
		this.setBoundingType("rect");
		this.addPointingStartEvent();
		this.addPointingEndEvent();
		this.addPointingOverEvent();
		this.addPointingOutEvent();
	},
	addToScene : function(scene) {
		this.addChildTo(scene);
	},
	removeFromScene : function() {
		this.remove();
	},
	setEnableState : function() {
		this.setState(SpriteEnableState(this));
	},
	setDisableState : function() {
		this.setState(SpriteDisableState(this));
	},
	addPointingStartEvent : function() {
		this.on("pointingstart", function(e) {
			this.getState().pointingStartAction(e);
		});
	},
	addPointingEndEvent : function() {
		this.on("pointingend", function(e) {
			this.getState().pointingEndAction(e);
		});
	},
	addPointingOverEvent : function() {
		this.on("pointingover", function(e) {
			this.getState().pointingOverAction(e);
		});
	},
	addPointingOutEvent : function() {
		this.on("pointingout", function(e) {
			this.getState().pointingOutAction(e);
		});
	},

	changeImage : function(image) { this.image = image; },
	getImageName : function() { return this.imageName; },
	setImageName : function(imageName) { this.imageName = imageName; },
	getDarkImage : function() { return this.imageName + "Dark"; },
	getState : function() { return this.state; },
	setState : function(state) { this.state = state; },
	getOriginState : function() { return this.originState; },
	setOriginState : function(originState) { this.originState = originState; },
	getIsUpdate : function() { return this.isUpdate; },
	setIsUpdate : function(isUpdate) { this.isUpdate = isUpdate; },
})