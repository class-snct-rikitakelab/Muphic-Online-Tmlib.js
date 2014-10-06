tm.define("StoryScene", {

	superClass : "tm.app.Scene",
	init : function(storyNumber) {
		defineStoryData();
		this.superInit();
		this.background = StoryBackgroundManager(this);
		this.menuButton = StoryMenuButtonManager(this);
		this.previewScreen = PreviewScreen(this);
		this.backgroundButton = BackgroundButtonManager(this);
		this.humanButton = HumanButtonManager(this);
		this.animalButton = AnimalButtonManager(this);
		this.itemButton = ItemButtonManager(this);
		this.removeIllustButton = RemoveIllustButtonManager(this);
		

		this.displayIntroDialog();


		var objectArray = [
			this.background,this.menuButton, this.backgroundButton, this.humanButton, this.animalButton, this.itemButton
		];
		this.previewScreen.setOtherObject(objectArray);
		this.previewScreen.setRemoveIllustButton(this.removeIllustButton);
		this.backgroundButton.setPalettePreviewScreen(this.previewScreen);
		this.backgroundButton.setPaletteRemoveIllustButton(this.removeIllustButton);
		this.backgroundButton.setPaletteOtherObject(objectArray);
		this.humanButton.setPalettePreviewScreen(this.previewScreen);
		this.humanButton.setPaletteRemoveIllustButton(this.removeIllustButton);
		this.humanButton.setPaletteOtherObject(objectArray);
		this.animalButton.setPalettePreviewScreen(this.previewScreen);
		this.animalButton.setPaletteRemoveIllustButton(this.removeIllustButton);
		this.animalButton.setPaletteOtherObject(objectArray);
		this.itemButton.setPalettePreviewScreen(this.previewScreen);
		this.itemButton.setPaletteRemoveIllustButton(this.removeIllustButton);
		this.itemButton.setPaletteOtherObject(objectArray);
		this.removeIllustButton.setPreviewScreen(this.previewScreen);

		//CORS関係につきコメントアウト中
		//alert(app.canvas.saveAsImage("png"));
		//var png = app.canvas.canvas.toDataURL();

		storySceneArray[storyNumber] = this;
	},

	displayIntroDialog : function(){

		this.introDialog = StoryIntroDialog(this);
		this.yesButton = StoryYesButton(this);

		this.introDialog.setBackground(this.background);
		this.introDialog.setMenuButton(this.menuButton);
		this.introDialog.setPreviewScreen(this.previewScreen);
		this.introDialog.setBackgroundButton(this.backgroundButton);
		this.introDialog.setHumanButton(this.humanButton);
		this.introDialog.setAnimalButton(this.animalButton);
		this.introDialog.setItemButton(this.itemButton);
		this.introDialog.setRemoveIllustButton(this.removeIllustButton);
		this.yesButton.setDialog(this.introDialog);
		this.introDialog.deactivateObject();

	}
})