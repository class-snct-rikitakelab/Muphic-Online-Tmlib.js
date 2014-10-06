tm.define("PianoButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	showNoteFocus : function() {
		this.getModel().setIsAvailable(true);
		this.getManager().showNoteFocus();
	},
	reset : function() {
		this.getModel().setIsAvailable(false);
		this.getManager().reset();
	},
})