tm.define("RemoveIllustButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().stopRemoveFocusUpdate();
	},
	//けすボタンを押すときの処理
	pointingStartAction : function() {
		return;
	},
	//けすボタンから押した後の処理
	pointingEndAction : function() {
		this.getParent().setState(RemoveIllustButtonPushState(this.getParent()));
	},
})