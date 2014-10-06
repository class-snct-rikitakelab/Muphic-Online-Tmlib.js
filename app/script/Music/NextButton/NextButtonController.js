tm.define("NextButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	forward : function() {
		this.getManager().forward();
	},
})