var storyButtonArray = [null,null,null,null];
var musicButtonArray = [null,null,null,null];


tm.define("MenuScene", {
	superClass : "tm.app.Scene",
	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);

		storyButtonArray[0] = new Menu_StoryButtonManager(this,150,330,0)
		storyButtonArray[1] = new Menu_StoryButtonManager(this,400,330,1);

		musicButtonArray[0] = new Menu_MusicButtonManager(this,150,500);
		musicButtonArray[1] = new Menu_MusicButtonManager(this,400,500);

		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		this.introDialog.setBackground(this.background);
		this.introDialog.setStoryButton(storyButtonArray[0],0);
		this.introDialog.setStoryButton(storyButtonArray[1],1);
		this.introDialog.setMusicButton(musicButtonArray[0],0);
		this.introDialog.setMusicButton(musicButtonArray[1],1);
		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	}
})