tm.define("IllustEnableState", {
	superClass : "SpriteEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	//マウスを押した時の動作
	pointingStartAction : function() {
		return;
	},
	//マウスを離した時の動作
	pointingEndAction : function() {
		this.getParent().destroyIllust();
	},
	//マウスオーバー時の動作
	pointingOverAction : function() {
		return;
	},
	//マウスアウト時の動作
	pointingOutAction : function() {
		return;
	},
})