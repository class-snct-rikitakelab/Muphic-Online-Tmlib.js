tm.define("AnimalButtonView", {
	superClass : "MVCViewButton",
	init : function(manager) {
		var image = "story_animalButton";
		var width = 106;
		var height = 72;
		var x = 35;
		var y = 458;
		this.superInit(image, width, height, x, y, manager);
	},
	//動物を選択するメニューを表示する
	addPalette : function() {
		this.getController().addPalette();
	},
})