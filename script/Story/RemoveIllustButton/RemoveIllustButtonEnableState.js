tm.define("RemoveIllustButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().stopRemoveFocusUpdate();
	},
	//けすボタンを押したときの処理
	pointingStartAction : function() {
		return;
	},
	//何か消した後の処理
	pointingEndAction : function() {
		this.getParent().setState(RemoveIllustButtonPushState(this.getParent()));
	},
})