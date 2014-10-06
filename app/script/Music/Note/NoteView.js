tm.define("NoteView", {
	superClass : "MVCViewSprite",
	init : function(manager, note) {
		var animal = note.animal;
		var measure = note.measure;
		var beat = note.beat;
		var scale = note.scale;
		var image = ANIMAL[animal];
		var width = 60;
		var height = 45;
		var x = X_FROM_MEASURE[measure] + X_FROM_BEAT[beat];
		var y = Y_FROM_SCALE[scale];
		this.superInit(image, width, height, x, y, manager);
		this.sound = tm.sound.SoundManager.get("piano" + scale).clone();
		this.play();
	},
	settingPlay : function() {
		var measure = this.getModel().getNote().measure;
		var beat = this.getModel().getNote().beat;
		var scale = this.getModel().getNote().scale;
		this.totalDistance = X_FROM_MEASURE[measure] + X_FROM_BEAT[beat] + 36;
		this.showDistance = X_FROM_MEASURE[measure - 3] + X_FROM_BEAT[beat] + BEAT_WIDTH;
		this.setIsUpdate(true);
	},
	play : function() {
		this.sound.play();
	},
	fadeIn : function() {
		new tm.app.Tweener(this).fadeIn(1);
	},
	fadeOut : function() {
		new tm.app.Tweener(this).fadeOut(500);
	},
	update : function() {
		if(this.showDistance === 0) {
			this.setVisible(true);
		}
		this.showDistance -= STEP;
		if(this.totalDistance === 0) {
			this.play();
			this.fadeOut();
		}
		this.totalDistance -= STEP;
	},
})