tm.define("RemoveIllustButtonPushState", {
	superClass : "ButtonPushState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().startRemoveFocusUpdate();
	},
	pointingStartAction : function() {
		return;
	},
	pointingEndAction : function() {
		this.getParent().setState(RemoveIllustButtonEnableState(this.getParent()));
	},
})