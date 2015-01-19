tm.define("ShopBackgroundView", {
	superClass : "MVCViewSprite",
	init : function(manager) {
		var image = "story_backgroundIllust_sunnyHouse1";
		var width = 1024;
		var height = 768;
		var x = 0;
		var y = 0;
		this.superInit(image, width, height, x, y, manager);
	}
})