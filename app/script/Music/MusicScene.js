var MEASURE_WIDTH = 240;
var BEAT_WIDTH = 60;
var MEASURENUMBER_MAX = 8;
var STEP = 1.5;

tm.define("MusicScene", {
	superClass : "tm.app.Scene",
	init : function(x) {
		defineMusicData();
		this.superInit();
		this.background = MusicBackgroundManager(this);
		this.playButton = PlayButtonManager(this);
		this.pianoButton = PianoButtonManager(this);
		this.guitarButton = GuitarButtonManager(this);
		this.removeNoteButton = RemoveNoteButtonManager(this);
		this.humen = Humen(this);
		this.introDialog = MusicIntroDialog(this);
		this.yesButton = MusicYesButton(this);

		var otherObject = [
			this.playButton,this.guitarButton, this.pianoButton, this.removeNoteButton,
			this.humen.getHumen(), this.humen.getNextButton(), this.humen.getPrevButton()
		];
		this.humen.setOtherObject(otherObject);
		this.humen.setPlayButton(this.playButton);

		this.playButton.setHumen(this.humen);
		this.pianoButton.setHumen(this.humen);
		this.pianoButton.setRemoveNoteButton(this.removeNoteButton);
		this.removeNoteButton.setHumen(this.humen);
		this.removeNoteButton.setPianoButton(this.pianoButton);

		this.introDialog.setBackground(this.background);
		this.introDialog.setPlayButton(this.playButton);
		this.introDialog.setPianoButton(this.pianoButton);
		this.introDialog.setGuitarButton(this.guitarButton);
		this.introDialog.setRemoveNoteButton(this.removeNoteButton);
		this.introDialog.setHumen(this.humen.getHumen());
		this.introDialog.setNextButton(this.humen.getNextButton());
		this.introDialog.setPrevButton(this.humen.getPrevButton());
		this.yesButton.setDialog(this.introDialog);

		musicSceneArray[x] = this;
	},
})