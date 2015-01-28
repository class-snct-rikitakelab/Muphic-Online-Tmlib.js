tm.define("Humen", {
	init : function(scene) {
		this.humen = HumenManager(scene, this);
		this.lastButton = LastButtonManager(scene, this);
		this.nextButton = NextButtonManager(scene, this);
		this.prevButton = PrevButtonManager(scene, this);
		this.firstButton = FirstButtonManager(scene, this);
		this.measureNumber = MeasureNumber(scene, this);
		this.note = Note(scene, this);
		this.noteFocus = NoteFocus(scene, this);
		this.removeNoteFocus = RemoveNoteFocus(scene, this);
		this.setScene(scene);
	},

	//直したい
	last : function(){
		for(var loopCount = 0; loopCount < MEASURENUMBER_MAX -  2; loopCount++)
			{
				console.log(loopCount);
				if(!this.getMeasureNumber().forward(1)) { 
					this.getMeasureNumber().back(1);
					this.getNextButton().setDisableState(); 
					this.getLastButton().setDisableState(); 
					break;
				}
				else { 
					this.getPrevButton().setEnableState(); 
					this.getFirstButton().setEnableState(); 
				}
				var startNumber = this.getMeasureNumber().getStartNumber();
				var endNumber = startNumber + 2;
				console.log(loopCount);
				this.getNote().forward(startNumber, endNumber, 1);
			}
	},
	forward : function() {
		if(!this.getMeasureNumber().forward(1)) { 
			this.getNextButton().setDisableState(); 
			this.getLastButton().setDisableState(); 
		}
		else { 
			this.getFirstButton().setEnableState(); 
			this.getPrevButton().setEnableState(); 
		}
		var startNumber = this.getMeasureNumber().getStartNumber();
		var endNumber = startNumber + 2;
		this.getNote().forward(startNumber, endNumber, 1);
	},

	//直したい
	back : function() {
		if(!this.getMeasureNumber().back(1)) {
			this.getPrevButton().setDisableState();
			this.getFirstButton().setDisableState();
		}	
		else { 
			this.getLastButton().setEnableState(); 
			this.getNextButton().setEnableState(); 
		}
		var startNumber = this.getStartNumber();
		var endNumber = startNumber + 2;
		this.getNote().back(startNumber, endNumber, 1);
	},
	first : function(){
		for(var loopCount = 0; loopCount < MEASURENUMBER_MAX -  2; loopCount++)
		{
		if(!this.getMeasureNumber().back(1)) {
			this.getMeasureNumber().forward(1);
			this.getPrevButton().setDisableState();
			this.getFirstButton().setDisableState();
			break;
		}	
		else { 
			this.getLastButton().setEnableState(); 
			this.getNextButton().setEnableState(); 
		}
		var startNumber = this.getStartNumber();
		var endNumber = startNumber + 2;
		this.getNote().back(startNumber, endNumber, 1);		}
	},
	createNote : function(note) {
		this.getNote().createNote(note);   //NoteFocusのcreateNoteを使っている
		if(this.getNote().count() === 1) { //譜面の音符が1つ以上ある場合
			this.getPlayButton().setEnableState();
		}
	},
	destroyNote : function(note) {
		this.getNote().destroyNote(note); //RemoveNoteFocusのdestroyNoteを使っている
		if(this.getNote().count() === 0) {　//譜面の音符がない場合
			this.getPlayButton().setDisableState();
		}
	},
//
	resetNote : function(note){
		this.getNote().destroyAllNote(note);
		if(this.getNote().count() === 0) {
			this.getPlayButton().setDisableState();
		}
	},
//
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
	getLastButton : function() { return this.lastButton; },
	setLastButton : function(lastButton) { this.lastButton = lastButton; },
	getNextButton : function() { return this.nextButton; },
	setNextButton : function(nextButton) { this.nextButton = nextButton; },
	getPrevButton : function() { return this.prevButton; },
	setPrevButton : function(prevButton) { this.prevButton = prevButton; },
	getFirstButton : function() { return this.firstButton; },
	setFirstButton : function(firstButton) { this.firstButton = firstButton; },
	getMeasureNumber : function() { return this.measureNumber; },
	setMeasureNumber : function(measureNumber) { this.measureNumber = measureNumber; },
	getNote : function() { return this.note; },
	setNote : function(note) { this.note = note; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getRemoveNoteFocus : function(){return this.removeNoteFocus;},
	getPlayButton : function() { return this.playButton; },
	setPlayButton : function(playButton) { this.playButton = playButton; },
	getOtherObject : function() { return this.otherObject; },
	setOtherObject : function(otherObject) { this.otherObject = otherObject; },
})