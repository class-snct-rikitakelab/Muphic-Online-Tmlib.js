tm.define("StoryScene", {
	superClass : "tm.app.Scene",
	init : function() {
		defineStoryData();
		this.superInit();
		this.background = StoryBackgroundManager(this);
		this.musicButton = MusicButtonManager(this);
		this.previewScreen = PreviewScreen(this);
		this.backgroundButton = BackgroundButtonManager(this);
		this.humanButton = HumanButtonManager(this);
		this.animalButton = AnimalButtonManager(this);
		this.itemButton = ItemButtonManager(this);
		this.removeIllustButton = RemoveIllustButtonManager(this);

		var objectArray = [
			this.background, this.musicButton,
			this.backgroundButton, this.humanButton, this.animalButton, this.itemButton, this.removeIllustButton
		];
		this.previewScreen.setOtherObject(objectArray);
		this.previewScreen.setRemoveIllustButton(this.removeIllustButton);
		this.backgroundButton.setPalettePreviewScreen(this.previewScreen);
		this.backgroundButton.setPaletteOtherObject(objectArray);
		this.humanButton.setPalettePreviewScreen(this.previewScreen);
		this.humanButton.setPaletteOtherObject(objectArray);
		this.animalButton.setPalettePreviewScreen(this.previewScreen);
		this.animalButton.setPaletteOtherObject(objectArray);
		this.itemButton.setPalettePreviewScreen(this.previewScreen);
		this.itemButton.setPaletteOtherObject(objectArray);
		this.removeIllustButton.setPreviewScreen(this.previewScreen);
	}
})