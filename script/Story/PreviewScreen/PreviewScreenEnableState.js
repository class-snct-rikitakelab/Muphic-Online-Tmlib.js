tm.define("PreviewScreenEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	//マウスオーバー時のアクション
	pointingOverAction : function() {
		this.getParent().startIllustFocusUpdate();
	},
	pointingOutAction : function() {
		this.getParent().stopIllustFocusUpdate();
	},
})