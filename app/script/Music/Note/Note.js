var scales = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

tm.define("Note", {
	init : function(scene, mediator) {
		this.setScene(scene);
		this.setMediator(mediator);
		this.initNote();
		this.initNoteSheet(scene);
		this.setStartNumber(1);
		this.setEndNumber(3);
	},
	initNote : function() {
		this.note = new Array();
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			this.note[measure] = new Array();
			for(var beat = 1; beat <= 4; beat++) {
				this.note[measure][beat] = new Array(8);
				for(var scale = 0; scale < 8; scale++) {
					this.note[measure][beat][scales[scale]] = null;
				}
			}
		}
	},
	initNoteSheet : function(scene) {
		var width = 240 * MEASURENUMBER_MAX;
		var height = 346;
		var x = 129;
		var y = 251;
		this.noteSheet = NoteSheet(scene, this, width, height, x, y);
	},
	createNote : function(note) {
		if(this.isExist(note.measure, note.beat, note.scale)) return;
		var scene = this.getScene();
		var _note = NoteManager(scene, this, note);
		this.note[note.measure][note.beat][note.scale] = _note;
		this.addChild(this.note[note.measure][note.beat][note.scale].getView());
		
		//全消し後反応なし
		if(note.beat == 4 && note.measure == this.getEndNumber() && note.measure < MEASURENUMBER_MAX)
			this.mediator.forward();
		else if(note.beat == 1 && note.measure == this.getStartNumber() && note.measure > MEASURENUMBER_MIN)
			this.mediator.back();
	},
	destroyNote : function(note) {
		if(!this.isExist(note.measure, note.beat, note.scale)) return;
		this.removeChild(this.note[note.measure][note.beat][note.scale].getView());
		this.note[note.measure][note.beat][note.scale] = null;

	},
	destroyAllNote : function(note){
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(this.note[measure][beat][scales[scale]]!==null){
						this.removeChild(this.note[measure][beat][scales[scale]].getView());
						this.note[measure][beat][scales[scale]] = null;
					}
				}			
			}			
		}	
	},
	addChild : function(note) {
		this.noteSheet.addChild(note);
	},
	removeChild : function(note) {
		this.noteSheet.removeChild(note);
	},
	forward : function(startNumber, endNumber, count) {
		this.inRange(startNumber, endNumber);
		this.noteSheet.forward(count);
		this.setStartNumber(startNumber);
		this.setEndNumber(endNumber);
	},
	back : function(startNumber, endNumber, count) {
		this.inRange(startNumber, endNumber);
		this.noteSheet.back(count);
		this.setStartNumber(startNumber);
		this.setEndNumber(endNumber);
	},
	count : function() {
		var count = 0;
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(this.isExist(measure, beat, scales[scale])) {
						count++;
					}
				}
			}
		}
		return count;
	},
	isExist : function(measure, beat, scale) {
		if(this.note[measure][beat][scale] !== null) { return true; }
		else { return false };
	},
	inRange : function(startNumber, endNumber) {
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(this.note[measure][beat][scales[scale]] !== null) {
						if(this.note[measure][beat][scales[scale]].inRange(startNumber, endNumber)) {
							this.note[measure][beat][scales[scale]].getView().setVisible(true);
						} else {
							this.note[measure][beat][scales[scale]].getView().setVisible(false);
						}
					}
				}
			}
		}
	},
	play : function(originStartNumber) {
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(this.note[measure][beat][scales[scale]] !== null) {
						this.note[measure][beat][scales[scale]].play();
					}
				}
			}
		}
		this.noteSheet.settingPlay(originStartNumber);
	},
	fin : function(originStartNumber) {
		this.getMediator().fin(originStartNumber);
	},

	getNote : function() { return this.note; },
	setNote : function(note) { this.note = note; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
	getStartNumber : function(){return this.startNumber;},
	setStartNumber : function(startNumber){this.startNumber = startNumber;},
	getEndNumber : function(){return this.endNumber;},
	setEndNumber : function(endNumber){this.endNumber = endNumber;},
})