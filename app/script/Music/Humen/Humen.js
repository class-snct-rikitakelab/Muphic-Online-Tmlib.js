tm.define("Humen", {
	init : function(scene) {
		this.humen = HumenManager(scene, this);
		this.nextButton = NextButtonManager(scene, this);
		this.prevButton = PrevButtonManager(scene, this);
		this.measureNumber = MeasureNumber(scene, this);
		this.note = Note(scene, this);
		this.noteFocus = NoteFocus(scene, this);
		this.removeNoteFocus = RemoveNoteFocus(scene, this);
		this.setScene(scene);
	},
	forward : function() {
		var oldStartNumber = this.getMeasureNumber().getStartNumber();
		if(!this.getMeasureNumber().forward(1)) { this.getNextButton().setDisableState(); }
		else { this.getPrevButton().setEnableState(); }
		var startNumber = this.getMeasureNumber().getStartNumber();
		var endNumber = startNumber + 2;
		this.getNote().forward(startNumber, endNumber, 1);
	},
	back : function() {
		var oldStartNumber = this.getStartNumber();
		if(!this.getMeasureNumber().back(1)) { this.getPrevButton().setDisableState(); }
		else { this.getNextButton().setEnableState(); }
		var startNumber = this.getStartNumber();
		var endNumber = startNumber + 2;
		this.getNote().back(startNumber, endNumber, 1);
	},
	createNote : function(note) {
		this.getNote().createNote(note);
		if(this.getNote().count() === 1) {
			this.getPlayButton().setEnableState();
		}
	},
	destroyNote : function(note) {
		this.getNote().destroyNote(note);
		if(this.getNote().count() === 0) {
			this.getPlayButton().setDisableState();
		}
	},
	showNoteFocus : function() {
		this.noteFocus.show();
	},
	hideNoteFocus : function() {
		this.noteFocus.hide();
	},
	showRemoveNoteFocus : function() {
		this.removeNoteFocus.show();
	},
	hideRemoveNoteFocus : function() {
		this.removeNoteFocus.hide();
	},
	play : function() {
		var originStartNumber = this.getStartNumber();
		var startNumber = 1;
		var endNumber = startNumber + 2;
		var count = originStartNumber - startNumber;
		this.getMeasureNumber().back(count);
		this.getNote().back(startNumber, endNumber, count);
		this.getNote().play(originStartNumber);
		this.disableOtherObject();
	},
	fin : function(originStartNumber) {
		var startNumber = originStartNumber;
		var endNumber = startNumber + 2;
		var count = originStartNumber - 1;
		this.getMeasureNumber().forward(count);
		this.getNote().forward(startNumber, endNumber, count);
		this.enableOtherObject();
	},
	enableOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].setOriginState();
		}
	},
	disableOtherObject : function() {
		for(var index in this.otherObject) {
			this.otherObject[index].giveOriginState();
			this.otherObject[index].setDisableState();
		}
	},
	isExist : function(measure, beat, scale) {
		return this.getNote().isExist(measure, beat, scale);
	},
	getStartNumber : function() {
		return this.getMeasureNumber().getStartNumber();
	},

	getHumen : function() { return this.humen; },
	setHumen : function(humen) { this.humen = humen; },
	getNextButton : function() { return this.nextButton; },
	setNextButton : function(nextButton) { this.nextButton = nextButton; },
	getPrevButton : function() { return this.prevButton; },
	setPrevButton : function(prevButton) { this.prevButton = prevButton; },
	getMeasureNumber : function() { return this.measureNumber; },
	setMeasureNumber : function(measureNumber) { this.measureNumber = measureNumber; },
	getNote : function() { return this.note; },
	setNote : function(note) { this.note = note; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getPlayButton : function() { return this.playButton; },
	setPlayButton : function(playButton) { this.playButton = playButton; },
	getOtherObject : function() { return this.otherObject; },
	setOtherObject : function(otherObject) { this.otherObject = otherObject; },
})