tm.define("ExtendedCanvasElement", {
	superClass : "tm.display.CanvasElement",
	init : function(width, height, x, y) {
		this.superInit();
		this.width = width;
		this.height = height;
		this.x = x;
		this.y = y;
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

	getIsUpdate : function() { return this.isUpdate; },
	setIsUpdate : function(isUpdate) { this.isUpdate = isUpdate; },
})