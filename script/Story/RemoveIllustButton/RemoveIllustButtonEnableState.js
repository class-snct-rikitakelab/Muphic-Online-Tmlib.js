tm.define("RemoveIllustButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().stopRemoveFocusUpdate();
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().setState(RemoveIllustButtonPushState(this.getParent()));
	},
})