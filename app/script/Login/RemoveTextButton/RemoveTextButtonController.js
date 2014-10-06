tm.define("RemoveTextButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	removeCharacter : function() {
		this.getManager().removeCharacter();
	},
})