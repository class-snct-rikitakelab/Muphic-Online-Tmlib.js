tm.define("PlayButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	play : function() {
		this.getManager().play();
	},
})