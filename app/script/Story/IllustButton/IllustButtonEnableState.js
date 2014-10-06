tm.define("IllustButtonEnableState", {
	superClass : "ButtonEnableState",
	init : function(parent) {
		this.superInit(parent);
	},
	/* ボタンを押した時の動作 */
	pointingStartAction : function() {
		return;
	},
	/* ボタンを離したときの動作 */
	pointingEndAction : function() {
		this.getParent().addPalette();//キャンバス内にイラストを追加
	},
})