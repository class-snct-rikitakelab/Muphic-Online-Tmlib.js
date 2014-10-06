tm.define("CharButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	addCharacter : function() {
		var character = this.getModel().getCharacter();
		this.getManager().addCharacter(character);
	},
})