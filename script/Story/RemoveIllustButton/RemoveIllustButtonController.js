tm.define("RemoveIllustButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	switchRemove: function() {
		if(!this.getModel().getIsAvailable()) {
			this.getManager().startRemoveFocusUpdate();
			this.getManager().setPushState();
			this.getModel().setIsAvailable(true);
		} else {
			this.getManager().stopRemoveFocusUpdate();
			this.getManager().setEnableState();
			this.getModel().setIsAvailable(false);
		}
	},
})