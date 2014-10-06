tm.define("BackgroundIllustView", {
	superClass : "MVCViewSprite",
	init : function() {
		var image = ILLUST["background"]["empty"][null];
		var width = 690;
		var height = 460;
		var x = 167;
		var y = 200;
		this.superInit(image, width, height, x, y, null);
	},
	renew : function() {
		var backgroundIllust = this.getModel().getBackgroundIllust();
		var arg1 = backgroundIllust.arg1;
		var arg2 = backgroundIllust.arg2;
		var arg3 = backgroundIllust.arg3;
		var image = ILLUST[arg1][arg2][arg3];
		this.changeImage(image);
	},
})