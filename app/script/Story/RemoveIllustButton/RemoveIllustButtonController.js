tm.define("RemoveIllustButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	startRemoveFocusUpdate : function() {
		this.getManager().startRemoveFocusUpdate();
		this.getModel().setIsAvailable(true);
	},
	stopRemoveFocusUpdate : function() {
		this.getManager().stopRemoveFocusUpdate();
		this.getModel().setIsAvailable(false);
	},
})