tm.define("NoteController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	inRange : function(startNumber, endNumber) {
		var measure = this.getModel().getNote().measure;
		if(startNumber <= measure && measure <= endNumber) { return true; }
		else { return false; }
	},
})