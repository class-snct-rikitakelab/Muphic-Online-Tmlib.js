tm.define("State", {
	init : function(parent) {
		this.parent = parent;
	},
	touchEndBehavior : function() {
		// override!
	},
	enterFrameBehavior : function() {
		// override!
	},

	getParent : function() { return this.parent; },
	setParent : function(parent) { this.parent = parent; }
})