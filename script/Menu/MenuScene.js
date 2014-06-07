tm.define("MenuScene", {
	storyButtons: [],
	musicButtons: [],

	superClass : "tm.app.Scene",
	init : function() {
		var story_height = 270;
		var music_height = 440;
		var storyButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		var musicButtonLocationX = {no1: 50, no2: 275, no3: 500, no4: 725};
		this.superInit();
		this.background = MenuBackgroundManager(this);

		this.storyButtons.push(new StoryButtonManager(this,storyButtonLocationX.no1,story_height,0));
		this.storyButtons.push(new StoryButtonManager(this,storyButtonLocationX.no2,story_height,1));
		this.storyButtons.push(new StoryButtonManager(this,storyButtonLocationX.no3,story_height,2));
		this.storyButtons.push(new StoryButtonManager(this,storyButtonLocationX.no4,story_height,3));

		this.musicButtons.push(new MusicButtonManager(this,musicButtonLocationX.no1,music_height,0));
		this.musicButtons.push(new MusicButtonManager(this,musicButtonLocationX.no2,music_height,1));
		this.musicButtons.push(new MusicButtonManager(this,musicButtonLocationX.no3,music_height,2));
		this.musicButtons.push(new MusicButtonManager(this,musicButtonLocationX.no4,music_height,3));

		this.introDialog = MenuIntroDialog(this);
		this.yesButton = MenuYesButton(this);

		this.introDialog.setBackground(this.background);
		this.yesButton.setDialog(this.introDialog);

		menuScene = this;
	},

	activateStoryButtons: function() {
		this.storyButtons.forEach(function(btn) { btn.setEnableState();} );
	},

	activateMusicButtons: function() {
		this.musicButtons.forEach(function(btn) { btn.setEnableState();} );
	}

})