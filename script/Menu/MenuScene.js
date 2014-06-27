// menuScene上のボタン配置などのレイアウト情報
menuSceneLayout = {
	storySelectButtons: [
		{name: 'no1', height: 270, posX: 50},
		{name: 'no2', height: 270, posX: 275},
		{name: 'no3', height: 270, posX: 500},
		{name: 'no4', height: 270, posX: 725}
	],
	musicSelectButtons: [
		{name: 'no1', height: 440, posX: 50},
		{name: 'no2', height: 440, posX: 275},
		{name: 'no3', height: 440, posX: 500},
		{name: 'no4', height: 440, posX: 725}
	]	
};


tm.define("MenuScene", {
	storySelectButtons: [],
	musicSelectButtons: [],

	superClass : "tm.app.Scene",

	init : function() {
		this.superInit();
		this.background = MenuBackgroundManager(this);

		this._initStoyButtons();
		this._initmusicSelectButtons();
		
		this.activateStorySelectButtons();
		this.activateMusicSelectButtons();

		menuScene = this;
	},

	activateStorySelectButtons: function() {
		this.storySelectButtons.forEach(function(btn) { btn.setEnableState();} );
	},

	activateMusicSelectButtons: function() {
		this.musicSelectButtons.forEach(function(btn) { btn.setEnableState();} );
	},

	_initStoyButtons: function() {
		var numBtns = menuSceneLayout.storySelectButtons.length;
		for (var i = 0; i < numBtns; i++) {
			var layout = menuSceneLayout.storySelectButtons[i];
			this.storySelectButtons.push(new StorySelectButtonManager(this, layout.posX, layout.height, i));
		}

	},

	_initmusicSelectButtons: function() {
		var numBtns = menuSceneLayout.musicSelectButtons.length;
		for (var i = 0; i < numBtns; i++) {
			var layout = menuSceneLayout.musicSelectButtons[i];
			this.musicSelectButtons.push(new MusicSelectButtonManager(this, layout.posX, layout.height, i));
		}
	},

	moveToStory : function(buttonNumber) {
		StorySceneState(buttonNumber);
	}

})