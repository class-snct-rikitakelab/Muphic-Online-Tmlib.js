tm.define("ExtendedButton", {
	superClass : "tm.display.Sprite",
	init : function(image, width, height, x, y) {
		this.superInit(image + "Off", width, height);
		this.setImageName(image);
		this.x = x + this.width / 2;
		this.y = y + this.height / 2;
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
	getOffImage : function() { return this.imageName + "Off"; },
	getOnImage : function() { return this.imageName + "On"; },
	getDarkImage : function() { return this.imageName + "Dark"; },
	getPushImage : function() { return this.imageName + "Push"; },
	getState : function() { return this.state; },
	setState : function(state) { this.state = state; },
	getOriginState : function() { return this.originState; },
	setOriginState : function(originState) { this.originState = originState; },
	getIsUpdate : function() { return this.isUpdate; },
	setIsUpdate : function(isUpdate) { this.isUpdate = isUpdate; },
})