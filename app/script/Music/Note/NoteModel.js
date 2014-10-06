tm.define("NoteModel", {
	superClass : "MVCModel",
	init : function(manager, scene, note) {
		this.superInit(manager, scene);
		this.setNote(note);
	},

	getNote : function() { return this.note; },
	setNote : function(note) { this.note = note; },
})