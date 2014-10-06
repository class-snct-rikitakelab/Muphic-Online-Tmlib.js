var scales = ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"];

tm.define("Note", {
	init : function(scene, mediator) {
		this.setScene(scene);
		this.setMediator(mediator);
		this.initNote();
		this.initNoteSheet(scene);
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
	},
	destroyNote : function(note) {
		if(!this.isExist(note.measure, note.beat, note.scale)) return;
		this.removeChild(this.note[note.measure][note.beat][note.scale].getView());
		this.note[note.measure][note.beat][note.scale] = null;
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
	},
	back : function(startNumber, endNumber, count) {
		this.inRange(startNumber, endNumber);
		this.noteSheet.back(count);
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
})