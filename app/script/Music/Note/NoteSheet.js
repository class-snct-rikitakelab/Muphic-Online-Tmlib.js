tm.define("NoteSheet", {
	superClass : "ExtendedCanvasElement",
	init : function(scene, mediator, width, height, x, y) {
		this.superInit(width, height, x, y);
		this.setTick(0);
		this.setScene(scene);
		this.setMediator(mediator);
		this.setIsUpdate(false);
		scene.addChild(this);
	},
	forward : function(count) {
		var x = this.x - (MEASURE_WIDTH * count);
		this.setX(x);
	},
	back : function(count) {
		var x = this.x + (MEASURE_WIDTH * count);
		this.setX(x);
	},
	settingPlay : function(originStartNumber) {
		var note = this.getMediator().getNote();
		LOOP: for(var measure = MEASURENUMBER_MAX; measure >= 1; measure--) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(note[measure][beat][scales[scale]] !== null) {
						this.lastMeasure = measure;
						break LOOP;
					}
				}
			}
		}
		this.distance = X_FROM_MEASURE[this.lastMeasure] + X_FROM_BEAT[4] + BEAT_WIDTH * 2;
		this.setOriginStartNumber(originStartNumber);
		this.setIsUpdate(true);
	},
	settingFin : function() {
		var note = this.getMediator().getNote();
		for(var measure = 1; measure <= MEASURENUMBER_MAX; measure++) {
			for(var beat = 1; beat <= 4; beat++) {
				for(var scale = 0; scale < 8; scale++) {
					if(note[measure][beat][scales[scale]] !== null) {
						note[measure][beat][scales[scale]].getView().fadeIn();
					}
				}
			}
		}
		var x = this.x + X_FROM_MEASURE[this.lastMeasure] + X_FROM_BEAT[4] + BEAT_WIDTH * 2;
		this.setX(x);
		this.setIsUpdate(false);
	},
	update : function() {
		this.tick++;
		if(this.tick === 15) {
			var y = this.y - 5;
			this.setY(y);
		} else if(this.tick === 25) {
			var y = this.y + 5;
			this.setY(y);
			this.setTick(0);
		}
		var x = this.x - STEP;
		this.setX(x);
		this.distance -= STEP;
		if(this.distance === 0) {
			this.setTick(0);
			this.setY(251);
			this.settingFin();
			this.getMediator().fin(this.getOriginStartNumber());
		}
	},

	getOriginStartNumber : function() { return this.originStartNumber; },
	setOriginStartNumber : function(originStartNumber) { this.originStartNumber = originStartNumber; },
	getTick : function() { return this.tick; },
	setTick : function(tick) { this.tick = tick; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})