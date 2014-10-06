tm.define("MVCModel", {
	superClass : "ObserverSubject",
	init : function(manager, scene) {
		this.superInit();
		this.manager = manager;
		this.scene = scene;
	},

	getManager : function() { return this.manager; },
	setManager : function(manager) { this.manager = manager; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
})