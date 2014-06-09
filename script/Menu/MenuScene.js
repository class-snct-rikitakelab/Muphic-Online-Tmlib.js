// menuScene上のボタン配置などのレイアウト情報
menuSceneLayout = {
	storyButtons: [
		{name: 'no1', height: 270, posX: 50},
		{name: 'no2', height: 270, posX: 275},
		{name: 'no3', height: 270, posX: 500},
		{name: 'no4', height: 270, posX: 725}
	],
	musicButtons: [
		{name: 'no1', height: 440, posX: 50},
		{name: 'no2', height: 440, posX: 275},
		{name: 'no3', height: 440, posX: 500},
		{name: 'no4', height: 440, posX: 725}
	]	
};


tm.define("MenuScene", {
	storyButtons: [],
	musicButtons: [],

	superClass : "tm.app.Scene",

	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);

		this._initStoyButtons();
		this._initMusicButtons();

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
	},

	_initStoyButtons: function() {
		var numBtns = menuSceneLayout.storyButtons.length;
		for (var i = 0; i < numBtns; i++) {
			var layout = menuSceneLayout.storyButtons[i];
			this.storyButtons.push(new StoryButtonManager(this, layout.posX, layout.height, i));
		}

	},

	_initMusicButtons: function() {
		var numBtns = menuSceneLayout.musicButtons.length;
		for (var i = 0; i < numBtns; i++) {
			var layout = menuSceneLayout.musicButtons[i];
			this.musicButtons.push(new MusicButtonManager(this, layout.posX, layout.height, i));
		}
	}



})