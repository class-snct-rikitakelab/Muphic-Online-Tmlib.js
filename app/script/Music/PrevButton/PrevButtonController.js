tm.define("PrevButtonController", {
	superClass : "MVCController",
	init : function(manager) {
		this.superInit(manager);
	},
	back : function() {
		this.getManager().back();
	},
})