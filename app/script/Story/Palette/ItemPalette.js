tm.define("ItemPalette", {
	superClass : "Palette",
	init : function(scene) {
		this.superInit(scene);
		this.paletteFrame = ItemPaletteFrameManager(scene);
	},
	initThumbnailButton : function(scene) {
		return;
	},
	initThumbnail : function(scene) {
		this.thumbnail = new Array(32);
		this.thumbnail[0] = ItemThumbnailManager(scene, this, "food", "apple");
		this.thumbnail[1] = ItemThumbnailManager(scene, this, "food", "coffee");
		this.thumbnail[2] = ItemThumbnailManager(scene, this, "food", "onigiri");
		this.thumbnail[3] = ItemThumbnailManager(scene, this, "food", "patty");
		this.thumbnail[4] = ItemThumbnailManager(scene, this, "food", "pudding");
		this.thumbnail[5] = ItemThumbnailManager(scene, this, "food", "fish");
		this.thumbnail[6] = ItemThumbnailManager(scene, this, "food", "nut");
		this.thumbnail[7] = ItemThumbnailManager(scene, this, "food", "dogfood");
		this.thumbnail[8] = ItemThumbnailManager(scene, this, "fashion", "blackBag");
		this.thumbnail[9] = ItemThumbnailManager(scene, this, "fashion", "redBag");
		this.thumbnail[10] = ItemThumbnailManager(scene, this, "fashion", "blueCap");
		this.thumbnail[11] = ItemThumbnailManager(scene, this, "fashion", "greenCap");
		this.thumbnail[12] = ItemThumbnailManager(scene, this, "fashion", "pinkCap");
		this.thumbnail[13] = ItemThumbnailManager(scene, this, "fashion", "summerCap");
		this.thumbnail[14] = ItemThumbnailManager(scene, this, "fashion", "yellowCap");
		this.thumbnail[15] = ItemThumbnailManager(scene, this, "fashion", "ribbon");
		this.thumbnail[16] = ItemThumbnailManager(scene, this, "interior", "leftChair");
		this.thumbnail[17] = ItemThumbnailManager(scene, this, "interior", "table");
		this.thumbnail[18] = ItemThumbnailManager(scene, this, "interior", "rightChair");
		this.thumbnail[19] = ItemThumbnailManager(scene, this, "interior", "clock");
		this.thumbnail[20] = ItemThumbnailManager(scene, this, "interior", "chest");
		this.thumbnail[21] = ItemThumbnailManager(scene, this, "interior", "bookShelf");
		this.thumbnail[22] = ItemThumbnailManager(scene, this, "interior", "dresser");
		this.thumbnail[23] = ItemThumbnailManager(scene, this, "interior", "television");
		this.thumbnail[24] = ItemThumbnailManager(scene, this, "goods", "butterflyNet");
		this.thumbnail[25] = ItemThumbnailManager(scene, this, "goods", "insectCage");
		this.thumbnail[26] = ItemThumbnailManager(scene, this, "goods", "beetle");
		this.thumbnail[27] = ItemThumbnailManager(scene, this, "goods", "rabbitDoll");
		this.thumbnail[28] = ItemThumbnailManager(scene, this, "goods", "trumpet");
		this.thumbnail[29] = ItemThumbnailManager(scene, this, "goods", "soccerBall");
		this.thumbnail[30] = ItemThumbnailManager(scene, this, "goods", "cellPhone");
		this.thumbnail[31] = ItemThumbnailManager(scene, this, "goods", "car");
	},
	selectIllust : function(illust) {
		this.removePalette();
		this.disableOtherObject();
		this.getPreviewScreen().changeSelectIllust(illust);
	},
})