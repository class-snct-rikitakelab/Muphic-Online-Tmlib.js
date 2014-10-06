tm.define("IllustFocusEnableState", {
	superClass : "State",
	init : function(parent) {
		this.superInit(parent);
		this.getParent().setAlpha(0.5);
		this.getParent().setInteractive(true);		//
		this.getParent().setIsUpdate(false);		//trueの時マウスに追従する
	},
	/*マウスを押した時に実行される処理*/
	pointingStartAction : function() {
		return;
	},
	/*マウスを離した時に実行される処理*/
	pointingEndAction : function() {
		this.getParent().createIllust();
	},
	/*マウスオーバー時に実行される処理*/
	pointingOverAction : function() {
		return;
	},
	/*マウスアウト時に実行される処理*/
	pointingOutAction : function() {
		return;
	},
})