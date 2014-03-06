var PREVIEWSCREEN_LEFT = 167;
var PREVIEWSCREEN_RIGHT = 857;
var PREVIEWSCREEN_TOP = 200;
var PREVIEWSCREEN_BOTTOM = 660;

tm.define("IllustFocusView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = ILLUST["man"]["glad"]["front"].image;
		var width = ILLUST["man"]["glad"]["front"].width;
		var height = ILLUST["man"]["glad"]["front"].height;
		var x = SCREEN_WIDTH;
		var y = SCREEN_HEIGHT;
		this.superInit(image, width, height, x, y, manager);
	},
	pointingStartAction : function() {
		var x = Math.floor(app.mouse.x);
		var y = Math.floor(app.mouse.y);
		this.getController().createIllust(x, y);
		this.getController().resetIllustFocus();
		this.resetPosition();
	},
	resetPosition : function() {
		var x = SCREEN_WIDTH + Math.floor(this.width / 2);
		var y = SCREEN_HEIGHT + Math.floor(this.height / 2);
		this.setPosition(x, y);
	},
	renew : function() {
		var illust = this.getModel().getIllust();
		var arg1 = illust.arg1;
		var arg2 = illust.arg2;
		var arg3 = illust.arg3;
		var image = ILLUST[arg1][arg2][arg3].image;
		var width = ILLUST[arg1][arg2][arg3].width;
		var height = ILLUST[arg1][arg2][arg3].height;
		this.changeImage(image);
		this.setSize(width, height);
	},
	update : function() {
		var x = Math.floor(app.mouse.x);
		var y = Math.floor(app.mouse.y);
		if(PREVIEWSCREEN_LEFT + 10 < x && x <= PREVIEWSCREEN_RIGHT - 10 - this.width) {
			if(PREVIEWSCREEN_TOP + 10 < y && y <= PREVIEWSCREEN_BOTTOM - 10 - this.height) {
				x = x + Math.floor(this.width / 2);
				y = y + Math.floor(this.height / 2);
				this.setPosition(x, y);
			}
		}
	},
})