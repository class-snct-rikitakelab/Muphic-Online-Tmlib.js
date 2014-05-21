tm.define("ButtonPushState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().changeImage(this.getParent().getPushImage());
		this.getParent().setAlpha(1.0);
		this.getParent().setInteractive(true);
	},
	//ボタンを押したときのアクション
	pointingStartAction : function() {
		// override
	},
	//ボタンを離したときのアクション
	pointingEndAction : function() {
		// override
	},
	//マウスオーバー時の悪書アクション
	pointingOverAction : function() {
		this.getParent().changeImage(this.getParent().getOnImage());
	},
	//マウスアウト時のアクション
	pointingOutAction : function() {
		this.getParent().changeImage(this.getParent().getPushImage());
	},
})