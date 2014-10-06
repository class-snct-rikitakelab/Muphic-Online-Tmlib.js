tm.define("MeasureNumber", {
	init : function(scene, mediator) {
		this.setStartNumber(1);
		this.setScene(scene);
		this.setMediator(mediator);
		this.initNumber(scene);
	},
	initNumber : function(scene) {
		this.measureNumber = new Array();
		this.measureNumber.push(MeasureNumberManager(scene, this, 1, 361, 214));
		this.measureNumber.push(MeasureNumberManager(scene, this, 2, 600, 214));
		this.measureNumber.push(MeasureNumberManager(scene, this, 3, 839, 214));
	},
	forward : function(count) {
		this.startNumber += count;
		for(var index in this.measureNumber) {
			this.measureNumber[index].forward(count);
		}
		if(this.startNumber === MEASURENUMBER_MAX - 2) { return false; }
		else { return true; }
	},
	back : function(count) {
		this.startNumber -= count;
		for(var index in this.measureNumber) {
			this.measureNumber[index].back(count);
		}
		if(this.startNumber === 1) { return false; }
		else { return true; }
	},

	getStartNumber : function() { return this.startNumber; },
	setStartNumber : function(startNumber) { this.startNumber = startNumber; },
	getScene : function() { return this.scene; },
	setScene : function(scene) { this.scene = scene; },
	getMediator : function() { return this.mediator; },
	setMediator : function(mediator) { this.mediator = mediator; },
})