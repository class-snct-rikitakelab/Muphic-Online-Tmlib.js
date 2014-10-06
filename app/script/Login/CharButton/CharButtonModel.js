tm.define("CharButtonModel", {
	superClass : "MVCModel",
	init : function(manager, scene, character) {
		this.superInit(manager, scene);
		this.character = character;
	},
	renewCharacter : function() {
		this.notify();
	},

	getCharacter : function() { return this.character; },
	setCharacter : function(character) { this.character = character; },
})