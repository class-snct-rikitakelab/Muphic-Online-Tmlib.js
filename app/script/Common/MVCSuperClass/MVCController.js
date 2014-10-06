tm.define("MVCController", {
	init : function(manager) {
		this.manager = manager;
		this.model = null;
		this.view = null;
	},
	addToScene : function() {
		var scene = this.getModel().getScene();
		this.getView().addToScene(scene);
	},
	removeFromScene : function() {
		var scene = this.getModel().getScene();
		if(scene.getChildAt(this.getView()) === -1) return;
		this.getView().removeFromScene();
	},
	setState : function(state) {
		this.getView().setState(state);
	},

	getManager : function() { return this.manager; },
	setManager : function(manager) { this.manager = manager; },
	getModel : function() { return this.model; },
	setModel : function(model) { this.model = model; },
	getView : function() { return this.view; },
	setView : function(view) { this.view = view; },
})