var storyButtonArray = [null,null,null,null];
var musicButtonArray = [null,null,null,null];

tm.define("MenuScene", {
	superClass : "tm.app.Scene",
	init : function() {
		var story_height = 270;
		var music_height = 440;
		var storyButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		var musicButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		this.superInit();
		this.background = MenuBackgroundManager(this);
		storyButtonArray[0] = new StoryButtonManager(this,storyButtonLocationX.no1,story_height,0);
		storyButtonArray[1] = new StoryButtonManager(this,storyButtonLocationX.no2,story_height,1);
		storyButtonArray[2] = new StoryButtonManager(this,storyButtonLocationX.no3,story_height,2);
		storyButtonArray[3] = new StoryButtonManager(this,storyButtonLocationX.no4,story_height,3);

		musicButtonArray[0] = new MusicButtonManager(this,musicButtonLocationX.no1,music_height,0);
		musicButtonArray[1] = new MusicButtonManager(this,musicButtonLocationX.no2,music_height,1);
		musicButtonArray[2] = new MusicButtonManager(this,musicButtonLocationX.no3,music_height,2);
		musicButtonArray[3] = new MusicButtonManager(this,musicButtonLocationX.no4,music_height,3);

		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		this.introDialog.setBackground(this.background);
		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	},

	activateStoryButton: function() {
		storyButtonArray[0].setEnableState();
		storyButtonArray[1].setEnableState();
		storyButtonArray[2].setEnableState();
		storyButtonArray[3].setEnableState();
	},

	activateMusicButton: function() {
		musicButtonArray[0].setEnableState();
		musicButtonArray[1].setEnableState();
		musicButtonArray[2].setEnableState();
		musicButtonArray[3].setEnableState();		
	}
	
})