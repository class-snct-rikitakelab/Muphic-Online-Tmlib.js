var storyButtonArray = [null,null,null,null];
var musicButtonArray = [null,null,null,null];

tm.define("MenuScene", {
	superClass : "tm.app.Scene",
	init : function() {
		var story_height = 270;
		var music_height = 440;
		var storyButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		var musicButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		var width_base = 50;


		this.superInit();
		this.background = MenuBackgroundManager(this);
		storyButtonArray[0] = new Menu_StoryButtonManager(this,storyButtonLocationX.no1,story_height,0);
		storyButtonArray[1] = new Menu_StoryButtonManager(this,storyButtonLocationX.no2,story_height,1);
		storyButtonArray[2] = new Menu_StoryButtonManager(this,storyButtonLocationX.no3,story_height,2);
		storyButtonArray[3] = new Menu_StoryButtonManager(this,storyButtonLocationX.no4,story_height,3);

		musicButtonArray[0] = new Menu_MusicButtonManager(this,musicButtonLocationX.no1,music_height,0);
		musicButtonArray[1] = new Menu_MusicButtonManager(this,musicButtonLocationX.no2,music_height,1);
		musicButtonArray[2] = new Menu_MusicButtonManager(this,musicButtonLocationX.no3,music_height,2);
		musicButtonArray[3] = new Menu_MusicButtonManager(this,musicButtonLocationX.no4,music_height,3);

		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		this.introDialog.setBackground(this.background);
		this.introDialog.setStoryButton(storyButtonArray[0],0);
		this.introDialog.setStoryButton(storyButtonArray[1],1);
		this.introDialog.setStoryButton(storyButtonArray[2],2);
		this.introDialog.setStoryButton(storyButtonArray[3],3);

		this.introDialog.setMusicButton(musicButtonArray[0],0);
		this.introDialog.setMusicButton(musicButtonArray[1],1);
		this.introDialog.setMusicButton(musicButtonArray[2],2);
		this.introDialog.setMusicButton(musicButtonArray[3],3);

		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	}
})