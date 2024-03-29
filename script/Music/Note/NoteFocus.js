tm.define("NoteFocus", {
	superClass : "ExtendedSprite",
	init : function(scene, mediator) {
		var image = ANIMAL["cat"];
		var width = 60;
		var height = 45;
		var x = SCREEN_WIDTH;
		var y = SCREEN_HEIGHT;
		this.superInit(image, width, height, x, y);
		this.addToScene(scene);
		this.setState(NoteFocusEnableState(this));
		this.setAlpha(0.5);
		this.setVisible(false);
		this.setIsUpdate(false);
		this.setMediator(mediator);
	},
	show : function() {
		var measure = MEASURE_FROM_X[Math.floor(app.mouse.x)] + this.getMediator().getStartNumber() - 1;
		var beat = BEAT_FROM_X[Math.floor(app.mouse.x)];
		var scale = SCALE_FROM_Y[Math.floor(app.mouse.y)];
		if(this.getMediator().isExist(measure, beat, scale)) return;
		this.setVisible(true);
		this.setIsUpdate(true);
	},
	hide : function() {
		this.setVisible(false);
		this.setIsUpdate(false);
	},
	createNote : function() {
		var measure = MEASURE_FROM_X[Math.floor(app.mouse.x)] + this.getMediator().getStartNumber() - 1;
		var beat = BEAT_FROM_X[Math.floor(app.mouse.x)];
		var scale = SCALE_FROM_Y[Math.floor(app.mouse.y)];
		var note = {
			"animal": "cat",
			"measure": measure,
			"beat": beat,
			"scale": scale
		};
		this.getMediator().createNote(note);
	},
	update : function() {
		var measure = MEASURE_FROM_X[Math.floor(app.mouse.x)];
		var beat = BEAT_FROM_X[Math.floor(app.mouse.x)];
		var x = 129 + X_FROM_MEASURE[measure] + X_FROM_BEAT[beat] + this.width / 2;
		var scale = SCALE_FROM_Y[Math.floor(app.mouse.y)];
		var y = 251 + Y_FROM_SCALE[scale] + this.height / 2;
		this.setX(x);
		this.setY(y);
	},

	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})