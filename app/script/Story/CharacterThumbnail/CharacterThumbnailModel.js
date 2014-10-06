tm.define("CharacterThumbnailModel", {
	superClass : "MVCModel",
	init : function(manager, scene, character, face, pose) {
		this.superInit(manager, scene);
		this.setCharacter(character);
		this.setFace(face);
		this.setPose(pose);
	},
	changeCharacter : function(character) {
		this.setCharacter(character);
		this.notify();
	},

	getCharacter : function() { return this.character; },
	setCharacter : function(character) { this.character = character; },
	getFace : function() { return this.face; },
	setFace : function(face) { this.face = face; },
	getPose : function() { return this.pose; },
	setPose : function(pose) { this.pose = pose; },
})