tm.define("MenuScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);
		this.musicButton = new Menu_MusicButtonManager(this,400,500);
		this.storyButton = new Menu_StoryButtonManager(this);
		this.thumbnail = MenuThumbnailManager(this);
		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		//ダイアログ
		this.introDialog.setBackground(this.background);
		this.introDialog.setStoryButton(this.storyButton);
		this.introDialog.setMusicButton(this.musicButton);
		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	}
})