tm.define("RemoveIllustButtonPushState", {
	superClass : "ButtonPushState",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().startRemoveFocusUpdate();
	},
	//けすボタンを押したときの処理
	pointingStartAction : function() {
		return;
	},
	//けすボタンを離したときの処理
	pointingEndAction : function() {
		this.getParent().setState(RemoveIllustButtonEnableState(this.getParent()));
	},
})