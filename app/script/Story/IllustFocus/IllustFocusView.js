//プレビュー画面の大きさ設定
var PREVIEWSCREEN_LEFT = 167;
var PREVIEWSCREEN_RIGHT = 857;
var PREVIEWSCREEN_TOP = 200;
var PREVIEWSCREEN_BOTTOM = 660;

tm.define("IllustFocusView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = ILLUST["man"]["glad"]["front"].image;											//画像番号
		var width = ILLUST["man"]["glad"]["front"].width;											//x
		var height = ILLUST["man"]["glad"]["front"].height;											//y
		var x = SCREEN_WIDTH;
		var y = SCREEN_HEIGHT;
		this.superInit(image, width, height, x, y, manager);
	},
	/* マウスクリック時の画像描写処理 */
	createIllust : function() {
		var x = Math.floor(app.mouse.x) - this.width/2;
		var y = Math.floor(app.mouse.y) - this.height/2;
		if(PREVIEWSCREEN_LEFT + 10 - this.width< x && x <= PREVIEWSCREEN_RIGHT - 10 - this.width) {			//イラストの置ける範囲制限　仮ver
			if(PREVIEWSCREEN_TOP + 10 < y && y <= PREVIEWSCREEN_BOTTOM - 10 - this.height) {				//調整が必要
				this.getController().createIllust(x, y);													//IllustFocusController.createIllust ?
				this.getController().resetIllustFocus();													//IllustFocusController.resetIllustFocus ?
				this.resetPosition();
			}
		}
	},
	/* ↑の処理後の半透明画像のxy座標のリセット　*/
	resetPosition : function() {
		var x = SCREEN_WIDTH + Math.floor(this.width / 2);
		var y = SCREEN_HEIGHT + Math.floor(this.height / 2);
		this.setPosition(x, y);
	},

	//イラストのパラメータ？
	renew : function() {
		var illust = this.getModel().getIllust();
		var arg1 = illust.arg1;
		var arg2 = illust.arg2;
		var arg3 = illust.arg3;
		var image = ILLUST[arg1][arg2][arg3].image;
		var width = ILLUST[arg1][arg2][arg3].width;
		var height = ILLUST[arg1][arg2][arg3].height;
		this.changeImage(image);																	//画像変更
		this.setSize(width, height);																//画像サイズ
	},
	/* マウス追従関数 */
	update : function() {
		var x = Math.floor(app.mouse.x) - this.width/2;												//画像の位置
		var y = Math.floor(app.mouse.y) - this.height/2;											//重み無し：カーソルに対して右下
		if(PREVIEWSCREEN_LEFT + 10 < x && x <= PREVIEWSCREEN_RIGHT - 10 - this.width) {
			if(PREVIEWSCREEN_TOP + 10 < y && y <= PREVIEWSCREEN_BOTTOM - 10 - this.height) {
				x = x + Math.floor(this.width / 2);
				y = y + Math.floor(this.height / 2);
				this.setPosition(x, y);
			}
		}
	},
})