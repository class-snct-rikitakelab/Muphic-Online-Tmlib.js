tm.define("IllustView", {
	superClass : "MVCViewSprite",
	init : function(manager, illust) {
		var arg1 = illust.arg1;
		var arg2 = illust.arg2;
		var arg3 = illust.arg3;
		var image = ILLUST[arg1][arg2][arg3].image;
		var width = ILLUST[arg1][arg2][arg3].width;
		var height = ILLUST[arg1][arg2][arg3].height;
		var x = illust.x;
		var y = illust.y;
		this.superInit(image, width, height, x, y, manager);
	},
	destroyIllust : function() {
		this.getController().destroyIllust();
	},
})