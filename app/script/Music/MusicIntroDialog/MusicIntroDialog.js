tm.define("MusicIntroDialog", {
	superClass : "ExtendedSprite",
	init : function(scene) {
		var image = "music_introDialog";
		var width = 640;
		var height = 342;
		var x = (SCREEN_WIDTH - 640) / 2;
		var y = (SCREEN_HEIGHT - 342) / 2;
		this.superInit(image, width, height, x, y);
		this.addToScene(scene);
	},
	removeDialog : function() {
		this.removeFromScene();
		this.getBackground().setEnableState();
		this.getPlayButton().setDisableState();
		this.getPianoButton().setEnableState();
		this.getGuitarButton().setEnableState();
		this.getRemoveNoteButton().setEnableState();
		this.getHumen().setDisableState();
		this.getNextButton().setEnableState();
		this.getPrevButton().setDisableState();
	},

	getBackground : function() { return this.background; },
	setBackground : function(background) { this.background = background; },
	getPlayButton : function() { return this.playButton; },
	setPlayButton : function(playButton) { this.playButton = playButton; },
	getPianoButton : function() { return this.pianoButton; },
	setPianoButton : function(pianoButton) { this.pianoButton = pianoButton; },
	getGuitarButton : function() { return this.guitarButton; },
	setGuitarButton : function(guitarButton) { this.guitarButton = guitarButton; },
	getRemoveNoteButton : function() { return this.removeNoteButton; },
	setRemoveNoteButton : function(removeNoteButton) { this.removeNoteButton = removeNoteButton; },
	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getNextButton : function() { return this.nextButton; },
	setNextButton : function(nextButton) { this.nextButton = nextButton; },
	getPrevButton : function() { return this.prevButton; },
	setPrevButton : function(prevButton) { this.prevButton = prevButton; },
})