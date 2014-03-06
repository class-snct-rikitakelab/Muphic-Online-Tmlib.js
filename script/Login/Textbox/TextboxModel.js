tm.define("TextboxModel", {
	superClass : "MVCModel",
	init : function(manager, scene) {
		this.superInit(manager, scene);
		this.text = "";
	},
	addCharacter : function(character) {
		if(this.countText() === TEXT_MAX) return false;
		this.text += character;
		this.notify();
	},
	removeCharacter : function() {
		if(this.countText() === 0) return false;
		this.text = this.text.slice(0, this.countText() - 1);
		this.notify();
	},
	countText : function() {
		return this.text.length;
	},

	getText : function() { return this.text; },
	setText : function(text) { this.text = text; },
})