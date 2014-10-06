tm.define("IllustController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	destroyIllust : function() {
		this.removeFromScene();
		this.getManager().destroyIllust();
	},
})