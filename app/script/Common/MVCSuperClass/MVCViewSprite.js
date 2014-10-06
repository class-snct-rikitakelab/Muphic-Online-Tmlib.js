tm.define("MVCViewSprite", {
	superClass : "ExtendedSprite",
	init : function(image, width, height, x, y, manager) {
		this.superInit(image, width, height, x, y);
		this.manager = manager;
		this.model = null;
		this.controller = null;
	},
	update : function(context) {
		// override
	},

	getManager : function() { return this.manager; },
	setManager : function(manager) { this.manager = manager; },
	getModel : function() { return this.model; },
	setModel : function(model) { this.model = model; },
	getController : function() { return this.controller; },
	setController : function(controller) { this.controller = controller; }
})