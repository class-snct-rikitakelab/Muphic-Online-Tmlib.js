tm.define("MeasureNumberModel", {
	superClass : "MVCModel",
	init : function(manager, scene, number) {
		this.superInit(manager, scene);
		this.setNumber(number);
	},
	forward : function(count) {
		this.number += count;
		this.notify();
	},
	back : function(count) {
		this.number -= count;
		this.notify();
	},

	getNumber : function() { return this.number; },
	setNumber : function(number) { this.number = number; },
})