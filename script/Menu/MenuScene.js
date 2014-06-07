
tm.define("MenuScene", {
	storyButtonArray: [],
	musicButtonArray: [],


	superClass : "tm.app.Scene",
	init : function() {
		var story_height = 270;
		var music_height = 440;
		var storyButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		var musicButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		this.superInit();
		this.background = MenuBackgroundManager(this);


		this.storyButtonArray.push(new StoryButtonManager(this,storyButtonLocationX.no1,story_height,0));
		this.storyButtonArray.push(new StoryButtonManager(this,storyButtonLocationX.no2,story_height,1));
		this.storyButtonArray.push(new StoryButtonManager(this,storyButtonLocationX.no3,story_height,2));
		this.storyButtonArray.push(new StoryButtonManager(this,storyButtonLocationX.no4,story_height,3));

		this.musicButtonArray[0] = new MusicButtonManager(this,musicButtonLocationX.no1,music_height,0);
		this.musicButtonArray[1] = new MusicButtonManager(this,musicButtonLocationX.no2,music_height,1);
		this.musicButtonArray[2] = new MusicButtonManager(this,musicButtonLocationX.no3,music_height,2);
		this.musicButtonArray[3] = new MusicButtonManager(this,musicButtonLocationX.no4,music_height,3);

		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		this.introDialog.setBackground(this.background);
		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	},

	activateStoryButtons: function() {
		this.storyButtonArray[0].setEnableState();
		this.storyButtonArray[1].setEnableState();
		this.storyButtonArray[2].setEnableState();
		this.storyButtonArray[3].setEnableState();
	},

	activateMusicButtons: function() {
		this.musicButtonArray[0].setEnableState();
		this.musicButtonArray[1].setEnableState();
		this.musicButtonArray[2].setEnableState();
		this.musicButtonArray[3].setEnableState();		
	}

})